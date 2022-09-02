package main

import (
	"database/sql"
	"fmt"
	"strings"
	"sync"

	"github.com/PuerkitoBio/goquery"
	_ "github.com/lib/pq"
)

// change your db details here
const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "postgres"
	dbname   = "postgres"
)

type Product struct {
	Url         string
	Images      []string
	Info        string
	GeneralInfo []string
	NewPrice    string
	OldPrice    string
	onlineSince string
	categories  string
	category    string
	subCategory string
	designer    string
	condition   string
	material    string
	colour      string
	location    string
}

func main() {

	// connect to postgres db

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}
	fmt.Println("Successfully connected!")

	var products []Product
	var product Product

	//row := []string{"URL", "Images", "Info", "Details", "NewPrice", "OldPrice", "OnlineSince", "Categories", ----- so on}

	// create postgres table in your postgres
	/*
		CREATE TABLE scrp_dat (
			Url TEXT NOT NULL,
			Images TEXT NOT NULL,
			Info TEXT NOT NULL,
			GeneralInfo TEXT NOT NULL,
			NewPrice TEXT NOT NULL,
			OldPrice TEXT NOT NULL,
			OnlineSince TEXT NOT NULL,
			Catergories TEXT NOT NULL,
			Category TEXT NOT NULL,
			SubCategory TEXT NOT NULL,
			Designer TEXT NOT NULL,
			Condition TEXT NOT NULL,
			Material TEXT NOT NULL,
			Colour TEXT NOT NULL,
			Location TEXT NOT NULL,
			PRIMARY KEY (Url)
		);
	*/

	var wg sync.WaitGroup
	// print(product)
	for i := 1; i < 2; i++ {
		wg.Add(1)
		doc, _ := goquery.NewDocument(fmt.Sprintf("https://www.vestiairecollective.com/men/p-%d/", i))
		words := doc.Find("li").Map(func(i int, sel *goquery.Selection) string {
			href, _ := sel.Find("a").Attr("href")
			return href
		})
		fmt.Println(len(words))
		go func() {
			defer wg.Done()
			for _, i := range words {

				if i != "" && strings.HasSuffix(i, "shtml") {

					s := strings.Split(fmt.Sprint("https://www.vestiairecollective.com%s", i), "/")
					s = strings.Split(s[len(s)-1], ".")

					// k := fmt.Sprintf("https://images.vestiairecollective.com/cdn-cgi/image//produit/" + s[0] + "-1_2.jpg")
					// var images []string
					// images = append(images, k)
					// k = fmt.Sprintf("https://images.vestiairecollective.com/cdn-cgi/image//produit/" + s[0] + "-2_2.jpg")
					// images = append(images, k)
					url := fmt.Sprintf("https://www.vestiairecollective.com%s", i)
					details, err := goquery.NewDocument(url)
					if err != nil {
						fmt.Errorf(err.Error())
					}
					kn := 0
					images := details.Find("div[class=vc-btn--outline]").Map(func(i int, sel *goquery.Selection) string {
						kn++

						return fmt.Sprintf("https://images.vestiairecollective.com/cdn-cgi/image//produit/"+s[0]+"-%d_%d.jpg", kn, kn)
					})
					// categories := details.Find("div[class=product-description-list_descriptionList__block__bh8ZS]").Find("ul").Find("li").Map(func(i int, s *goquery.Selection) string {
					// 	return s.Text()
					// })
					//fmt.Println(categories)
					price := details.Find("div[class=product-price_productPrice__Uq0dh]").Find("p").Find("span").Map(func(i int, s *goquery.Selection) string {
						return s.Text()
					})

					var newPrice, oldPrice string
					if len(price) < 1 {
						newPrice = "Nan"
						oldPrice = "Nan"
					} else {
						newPrice = price[len(price)-1]
						oldPrice = price[0]
					}

					info := details.Find("div[class=product-seller-description_sellerDescription__SnSkU]").Find("p").Text()
					var x int
					general := details.Find("div[class=product-description-list_descriptionList__block__bh8ZS]").Find("li").Map(func(i int, sel *goquery.Selection) string {
						span := sel.Find("span").Map(func(j int, s *goquery.Selection) string {
							switch x {
							case 1:
								product.onlineSince = s.Text()
							case 3:
								product.categories = s.Text()
							case 5:
								product.category = s.Text()
							case 7:
								product.subCategory = s.Text()
							case 9:
								product.designer = s.Text()
							case 11:
								product.condition = s.Text()
							case 13:
								product.material = s.Text()
							case 15:
								product.colour = s.Text()
							case 17:
								product.location = s.Text()
							}
							x++
							return s.Text()
						})
						return strings.Join(span, " ")
					})

					product.Images = images
					product.GeneralInfo = general
					product.Info = info
					product.NewPrice = newPrice
					product.OldPrice = oldPrice
					product.Url = url

					products = append(products, product)
					fmt.Println(len(products))

					insertStatement := `
					INSERT INTO scrp_dat(Url, Images, Info, GeneralInfo, NewPrice, OldPrice, OnlineSince, Catergories, Category, SubCategory, Designer, Condition, Material, Colour, Location)
					VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`

					_, err = db.Exec(insertStatement, product.Url, strings.Join(images, " "), product.Info, strings.Join(general, " "), product.NewPrice, product.OldPrice, product.onlineSince, product.categories, product.category, product.subCategory, product.designer, product.condition, product.material, product.colour, product.location)
					if err != nil {
						panic(err)
					}
				}
			}
		}()
		// Make request

	}
	wg.Wait()
}
