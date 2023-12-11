package com.example.WhatTheKey

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@CrossOrigin(origins = ["http://localhost:4200"]) // Adjust as per your Angular app's URL
@RestController
class TracksController {

    @GetMapping("/api/data")
    fun getData(): Map<String, String> {
        return mapOf("key" to "value")
    }

    @GetMapping("/api/hello")
    fun hello(): ResponseEntity<Any> {
        return ResponseEntity.ok(mapOf("message" to "Hello World!"))
    }

    @GetMapping("/api/reload")
    fun secondEndpoint(): ResponseEntity<Any> {
        return ResponseEntity.ok(mapOf("message" to "Let's see if the hot reload works!"))
    }
}
