def truncate(text, max_length):
    return text[:max_length]

text = "こんにちは"  # Japanese characters
print(truncate(text, 2))  # This will cut the second character in half


text = "𠜎𠜱𠝹"  # Characters outside the BMP
print(truncate(text, 2))  # This will split a surrogate pair


text = "👩🏽‍🚀"  # Woman astronaut with a skin tone modifier
print(truncate(text, 3))  # This will split the emoji sequence

text = "ñ"  # "n" followed by a combining tilde
print(truncate(text, 1))  # This will remove the tilde, resulting in just "n"


import textwrap

def safe_truncate(text, max_length):
    return textwrap.shorten(text, width=max_length, placeholder="")

print(safe_truncate("こんにちは", 2))
print(safe_truncate("👩🏽‍🚀", 3))
