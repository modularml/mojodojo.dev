---
title: String
categories: String
usage: Mutable String with DynamicVector[Int8] as the underlying data type
---

Contributed by [gautam](https://github.com/gautam-e)

# String

## Initialization


```mojo :no-line-numbers 
from String import String

var s = String("abcde")
print(s)
```

    abcde


## Indexing

Loop through the string and print each item


```mojo :no-line-numbers 
for i in range(len(s)):
    print(s[i])
```

    a
    b
    c
    d
    e


Both slicing and indexing are on bytes, not characters, for example an emoji is 4 bytes so you need to use this slice of 4 bytes to print the character:


```mojo :no-line-numbers 
var utf8 = String("mojo🔥")
print(utf8[4:8])
```

    🔥


## Slicing

Print part of the string sting using a slice

Slice from 2 up to 4 non-inclusive:


```mojo :no-line-numbers 
print(s[2:4]) 
```

    cd


Slice all characters starting from 1:


```mojo :no-line-numbers 
print(s[1:]) 
```

    bcde


Slice all characters up to the second last:


```mojo :no-line-numbers 
print(s[:-1]) 
```

    abcd


Only get every second item after the start position:


```mojo :no-line-numbers 
print(s[::2]) 
```

    ace


## Appending
Returns a new string by copying memory


```mojo :no-line-numbers 
let x = String("Left")
let y = String("Right")

var c = x + y

c += "🔥"

print(c)
```

    LeftRight🔥


## Join


```mojo :no-line-numbers 
var j = String("🔥")
```

The `join` function has a similar syntax to Python's `join`. You can join elements using the current string as a delimiter.


```mojo :no-line-numbers 
print(j.join('a', 'b'))
print(j.join(40, 2))
```

    a🔥b
    40🔥2


You can also use it to join elements of a StaticIntTuple.


```mojo :no-line-numbers 
from Index import StaticIntTuple

var sit = StaticIntTuple[3](1,2,3)
print(j.join(sit))
```

    1🔥2🔥3


## atol
The term comes from the C stdlib for `ASCII to long-integer`, it converts a string to an `Int` (currently just works with base-10 / decimal):


```mojo :no-line-numbers 
from String import atol

var n = atol("19")
print(n)
```

    19


This will throw an error because there's a character that's not a digit:


```mojo :no-line-numbers 
var e = atol("hi")
print(e)
```

    Error: String is not convertible to integer.


## chr
Use chr to convert an integer between 0 and 255 to a string containing the single character


```mojo :no-line-numbers 
from String import chr

print(chr(97))
```

    a


## ord
Stands for `ordinal` which means the position of the character in ASCII


```mojo :no-line-numbers 
from String import ord

print(ord('a'))
```

    97


Only 1 byte utf8 (ASCII) characters currently work, anything outside will currently wrap:


```mojo :no-line-numbers 
print(ord('🔥'))
```

    -16


## isdigit
Check if the character passed in is a valid decimal between 0 and 9, which in ASCII is 48 to 57


```mojo :no-line-numbers 
from String import isdigit

print(isdigit(ord('8')))
print(isdigit(ord('a')))
```

    True
    False


## Conversions
### To `DynamicVector[Int8]`


In Mojo a string is backed by a `DynamicVector[Int8]`, which you can access via the `buffer` member variable:


```mojo :no-line-numbers 
let buffer = String("mojo").buffer
print(buffer.capacity)
```

    4


Force an error so Mojo shows us the type:


```mojo :no-line-numbers 
buffer = ""
```

    error: Expression [19]:25:14: cannot implicitly convert 'StringLiteral' value to 'DynamicVector[SIMD[si8, 1]]' in assignment
        buffer = ""
                 ^~
    


### From `DynamicVector[Int8]`


```mojo :no-line-numbers 
from Vector import DynamicVector

var x = DynamicVector[Int8](4)
x.push_back(109)
x.push_back(111)
x.push_back(106)
x.push_back(111)

let s = String(x.data, 4)
print(s)
```

    mojo


<CommentService />
