
creating a new local date `LocalDate.now()`
since it is a class with static methods we use the methods instead of creating a new object
creating custom dates by passing the y/m/d
localdate.max, min and epoch
epoch prints the unix start time 1970-01-01
toEpochSecond() will print the seconds since unix time
date.getDayOfMonth returns the day of the mnth
getYear() will return the day
formating dates with DateTimeFormatter class 
we can use this to return d/m/y
we can do this using the ofPattern method
the formatting is very case sensitive
there are many different formatting options
we can use the parse method of LocalDate to parse strings into dates


## Working with different time zones
- calculating number of days between two different LocalDate dates
- Using ChronoUnit to calculate the difference between two dates
- Duration.between

## LocalDateTime
- this will return both the year and the current local time
- Always work with strings
- creating due time by specifying year/month/day/hour/minute/second/nanosecond
- truncatedTo function to truncate seconds and hours
- compareTo()



## ZoneDateTime
- UTC standard that is always returned by the server
- this returns in addition - nanoseconds, gmt zone and zone name
- we can format this again using the dateTimeFormatter
- we can also perform operations on dates to add hours/minutes/days etc
- Always write to the DB with UTC

## Data Structures
- Set is an interface and has many implementations
- Set cannot have duplicates
- Hash set will use the hashCode method to check for duplicates
- when we compare objects we need to override both hashCode and the equals methods 
- Stream in Java is a factory that puts each object into a pipe
- System.out::printLn
- We can use use map similar to rxjs
- collect method after the stream
- Overriding the set test to create our own custom structure
- Predicate interface for creating filters during streams


### Functional interfaces
- using streams