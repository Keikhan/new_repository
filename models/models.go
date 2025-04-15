package models

import "gorm.io/gorm"

type Fact struct {
	gorm.Model
	Question string `json:"question" gorm:"type:text;not null"`
	Answer   string `json:"answer" gorm:"type:text;not null"`
}
