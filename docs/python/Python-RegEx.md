---
sidebar_position: 34
---

A regular expression (regex or regexp) is a sequence of characters that defines a search pattern. It is a powerful and concise way to describe a set of strings based on a specific pattern. Regular expressions are used in various programming languages, including Python, to perform text search, pattern matching, and text manipulation tasks.

---
# Python Regular Expressions

The pattern defined by a regular expression can be used to:

1. **Search for Patterns:** Regular expressions can be used to find specific patterns within strings, such as phone numbers, email addresses, or specific words.

2. **Matching Text:** You can use regular expressions to determine if a given string matches a particular pattern or not.

3. **Extracting Substrings:** Regular expressions can extract specific substrings from a larger text based on a defined pattern.

4. **Text Replacement:** Regular expressions can be used to search and replace specific patterns in a text with other text.

5. **Data Validation:** Regular expressions are often employed to validate user input, ensuring it conforms to certain predefined patterns.

### special syntax to define patterns

In regular expressions, a pattern is a sequence of characters that defines a search criteria. The pattern uses a special syntax that includes both ordinary characters and metacharacters. Ordinary characters match themselves, while metacharacters have special meanings and represent more complex patterns. Here are some of the key metacharacters and their special meanings in regular expressions:

1. `.` (dot): Matches any single character except a newline.
   Example: `a.b` matches "aab", "axb", "a#b", etc.

2. `*`: Matches zero or more occurrences of the preceding character.
   Example: `ab*c` matches "ac", "abc", "abbc", "abbbc", etc.

3. `+`: Matches one or more occurrences of the preceding character.
   Example: `ab+c` matches "abc", "abbc", "abbbc", etc., but not "ac".

4. `?`: Matches zero or one occurrence of the preceding character.
   Example: `colou?r` matches "color" and "colour".

5. `|` (pipe): Acts as an OR operator to match either of the patterns on its left or right.
   Example: `cat|dog` matches "cat" or "dog".

6. `[]` (square brackets): Define a character class, matching any single character from the specified set.
   Example: `[aeiou]` matches any lowercase vowel.

7. `[^]` (caret within square brackets): Defines a negated character class, matching any single character not in the specified set.
   Example: `[^aeiou]` matches any character that is not a lowercase vowel.

8. `-` (hyphen within square brackets): Defines a range of characters inside a character class.
   Example: `[0-9]` matches any single digit.

9. `()` (parentheses): Group expressions together. Useful for applying quantifiers to groups of characters or capturing substrings for extraction.
   Example: `(ab)+` matches "ab", "abab", "ababab", etc.

10. `^` (caret): Matches the start of a string.
    Example: `^hello` matches "hello", "hello world", but not "world hello".

11. `$` (dollar sign): Matches the end of a string.
    Example: `world$` matches "world", "hello world", but not "world hello".

12. `\` (backslash): Used to escape metacharacters so that they are treated as ordinary characters.
    Example: `\$100` matches "$100".

These are just some of the common metacharacters used in regular expressions. Regular expressions can be very flexible and powerful, allowing you to create complex patterns for sophisticated text searching and manipulation tasks. However, they can also be challenging to write and read, especially for more complex patterns, so it's helpful to practice and refer to documentation as needed.

### Examples

Sure! Let's explore some examples of using regular expressions in Python to perform common text processing tasks.

1. **Matching a Specific Word in a Text:**
```python
import re

text = "The quick brown fox jumps over the lazy dog."

pattern = r"fox"
match = re.search(pattern, text)

if match:
    print("Match found:", match.group())
else:
    print("No match found.")
```
Output:
```
Match found: fox
```

2. **Matching Multiple Occurrences of a Pattern:**
```python
import re

text = "The cat and the hat sat on the mat."

pattern = r"cat|hat"
matches = re.findall(pattern, text)

print("Matches found:", matches)
```
Output:
```
Matches found: ['cat', 'hat']
```

3. **Extracting Numbers from a String:**
```python
import re

text = "I have 3 apples and 12 oranges."

pattern = r"\d+"  # Matches one or more digits
matches = re.findall(pattern, text)

print("Numbers found:", matches)
```
Output:
```
Numbers found: ['3', '12']
```

4. **Splitting a String by Punctuation:**
```python
import re

text = "Hello, world! How are you doing?"

pattern = r"[,!.?]"  # Matches any punctuation
words = re.split(pattern, text)

print("Words:", words)
```
Output:
```
Words: ['Hello', ' world', ' How are you doing', '']
```

5. **Replacing Words in a String:**
```python
import re

text = "I love apples, but I don't like oranges."

pattern = r"apples|oranges"
new_text = re.sub(pattern, "fruits", text)

print(new_text)
```
Output:
```
I love fruits, but I don't like fruits.
```

6. **Matching Specific Formats (Email Addresses):**
```python
import re

text = "Contact us at support@example.com or info@example.org."

pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
emails = re.findall(pattern, text)

print("Email addresses found:", emails)
```
Output:
```
Email addresses found: ['support@example.com', 'info@example.org']
```

These examples demonstrate some of the many use cases of regular expressions in Python. Regular expressions offer a flexible and efficient way to handle complex text patterns and make text processing tasks more manageable. As you can see, with regular expressions, you can search, extract, split, and manipulate text effectively in various Python applications.

### Methods

In Python, regular expressions are handled using the `re` module, which provides various methods for working with regular expressions. Here are some of the key methods in the `re` module:

1. **`re.search(pattern, string)`**: Searches for a pattern in a given string and returns a match object if a match is found. It stops searching after finding the first occurrence.

   ```python
   import re

   pattern = r"hello"
   text = "hello world"

   match = re.search(pattern, text)
   if match:
       print("Match found:", match.group())
   else:
       print("No match found.")
   ```

2. **`re.match(pattern, string)`**: Checks if the pattern matches at the beginning of the string. It returns a match object if there's a match, otherwise, it returns `None`.

   ```python
   import re

   pattern = r"hello"
   text = "hello world"

   match = re.match(pattern, text)
   if match:
       print("Match found:", match.group())
   else:
       print("No match found.")
   ```

3. **`re.findall(pattern, string)`**: Returns a list of all occurrences of the pattern in the string.

   ```python
   import re

   pattern = r"\d+"  # Matches one or more digits
   text = "I have 3 apples and 12 oranges."

   matches = re.findall(pattern, text)
   print(matches)  # Output: ['3', '12']
   ```

4. **`re.finditer(pattern, string)`**: Returns an iterator yielding match objects for all occurrences of the pattern in the string.

   ```python
   import re

   pattern = r"\d+"  # Matches one or more digits
   text = "I have 3 apples and 12 oranges."

   matches = re.finditer(pattern, text)
   for match in matches:
       print("Match found:", match.group())
   ```

5. **`re.sub(pattern, replacement, string)`**: Replaces occurrences of the pattern in the string with the specified replacement.

   ```python
   import re

   pattern = r"\d+"  # Matches one or more digits
   text = "I have 3 apples and 12 oranges."

   new_text = re.sub(pattern, "some", text)
   print(new_text)  # Output: "I have some apples and some oranges."
   ```

6. **`re.split(pattern, string)`**: Splits the string by occurrences of the pattern and returns a list of substrings.

   ```python
   import re

   pattern = r"\s+"  # Matches one or more whitespace characters
   text = "apple orange   banana"

   words = re.split(pattern, text)
   print(words)  # Output: ['apple', 'orange', 'banana']
   ```

These are some of the essential methods in the `re` module for working with regular expressions in Python. Regular expressions provide a powerful way to work with text patterns, and understanding these methods will allow you to perform various text processing tasks efficiently.