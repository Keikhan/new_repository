package main

import (
	"github.com/divrhino/divrhino-trivia/handlers"
	"github.com/gofiber/fiber/v2"
)

func setupRoutes(app *fiber.App) {

	app.Get("/", handlers.ListFacts)
	app.Get("/fact", handlers.NewFactView)
	app.Post("/fact", handlers.CreateFact)
	app.Get("/fact/:id", handlers.ShowFact)
	app.Get("/fact/:id/edit", handlers.EditFact)
	// Update fact
	app.Patch("/fact/:id", handlers.UpdateFact)
	app.Delete("/fact/:id", handlers.DeleteFact)
	app.Get("/fact/:id/edit", handlers.EditFact)

}
