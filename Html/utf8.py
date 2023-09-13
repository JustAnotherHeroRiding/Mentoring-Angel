def truncate(text, max_length):
    return text[:max_length]

jpn = "こんにちは"  # Japanese characters
print("This is a japanese character being cut in half: " + truncate(jpn, 2))  # This will cut the second character in half


outsideBMP = "𠜎𠜱𠝹"  # Characters outside the BMP
print("Characters outside the BMP:" + truncate(outsideBMP, 2))  # This will split a surrogate pair


emojiModified = "👩🏽‍🚀"  # Woman astronaut with a skin tone modifier
print("This is a modified emoji : " + truncate(emojiModified, 3))  # This will split the emoji sequence

tilde = "ñ"  # "n" followed by a combining tilde
print("Character with a combining tilde being cut:" + truncate(tilde, 1))  # This will remove the tilde, resulting in just "n"


import textwrap

def safe_truncate(text, max_length):
    return textwrap.shorten(text, width=max_length, placeholder="")

print(safe_truncate("こんにちは", 2))
print(safe_truncate("👩🏽‍🚀", 3))
