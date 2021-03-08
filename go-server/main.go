package main

import (
	"recaptcha-go/src/controller"
	"recaptcha-go/src/utils"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	utils.LoadEnv()
	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.POST("/verify-recaptcha", controller.VerifyReCaptcha)
	r.Run()
}
