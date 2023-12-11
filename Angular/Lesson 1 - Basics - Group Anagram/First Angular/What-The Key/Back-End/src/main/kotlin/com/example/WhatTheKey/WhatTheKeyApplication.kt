package com.example.WhatTheKey

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

// gradle -t :bootJar and gradle bootRun in two windows for reload

@SpringBootApplication class WhatTheKeyApplication

fun main(args: Array<String>) {
    runApplication<WhatTheKeyApplication>(*args)
}
