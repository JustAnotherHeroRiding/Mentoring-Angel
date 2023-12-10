package com.example.WhatTheKey

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.http.ResponseEntity




@SpringBootApplication
class WhatTheKeyApplication

fun main(args: Array<String>) {
	runApplication<WhatTheKeyApplication>(*args)
}

@CrossOrigin(origins = ["http://localhost:4200"]) // Adjust as per your Angular app's URL
@RestController
class MyController {

    @GetMapping("/api/data")
    fun getData(): Map<String, String> {
        return mapOf("key" to "value")
    }

	@GetMapping("/api/hello")
	fun hello(): ResponseEntity<Any> {
    	return ResponseEntity.ok(mapOf("message" to "Hello World!"))
	}

}

