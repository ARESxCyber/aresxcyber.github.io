# Dots Exposed

**Category**: misc \
**Solves**: 33 \
**Points**: 243 \
**Author**: geolado

Server: <https://dots.exposed>

## Notes

I grepped the source code and it seems like the only time IO is performed is when libraries are imported (didn't look super closely so I might've missed stuff).

```python
def _get_path_of_lib_file(self, filename):
    dir_paths_to_try = [
        self.program_dir,
        os.path.join(os.path.dirname(os.path.realpath(__file__)), 'libs'),
        os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'libs'),
    ]

    for dir_path in dir_paths_to_try:
        path = os.path.join(dir_path, filename)
        if os.path.isfile(path):
            return path
    
    raise RuntimeError('Native library "{}" cannot be found'.format(filename))
```

`path = os.path.join(dir_path, filename)` looks vulnerable to directory traversal so we can do `%!/etc/passwd f` for example, but we still have to figure out how to exfiltrate stuff.

---

After testing on the website, uploads are not stored in the same directory. Tested by first uploading a library, then trying to importing it and run it (which didn't work).

---

The last line of `_import_lib_file_with_warp_id()`:
```python
char_obj_array.extend(lib_char_obj_array)
```

So the file contents of what we import will be appended to `self.map` of the `World` object. For reference, `self.map` basically stores a 2D "map" of the world.

Issue: it only gets appended when you invoke the library warp, but since it's not valid asciidots syntax it throws an exception:
```asciidot
%!/flag p
.-p
```
```
RuntimeError: Warp "p" has no destination
```

If only there was some magic command to just print out the map ...
Maybe tricking the interpreter with unclosed quotes?

## Solution

```asciidot
%!/flag a

.---)---a
..................................................
||||||||||||||||||||||||||||||||||||||||||||||||||
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
''''''''''''''''''''''''''''''''''''''''''''''''''
```

Final flag:

```
CTF-BR{gosh,I_hate_those_fucking_0x0a}
```