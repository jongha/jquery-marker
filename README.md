# jQuery Marker

Highlighters(or markers) used to highlight and cover over existing writing while still leaving the writing readable. This jQuery plugin supports the highlighting of certain parts of the web page. This is Minimum viable product (MVP) project. But this has a great deal of potential. I'm sure this plugin helps develop your web pages soon. Your contribution is always welcome. Thanks.

## Description

```
$(selector).marker([options])
```

* **options**
  * color
    * string of color, default '#FFFF00' (yellow).

## Usage

1. Include jQuery library and marker plugin script at the your page.

```
<script type="text/javascript" src="../libs/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="../src/jquery.marker.js"></script>
```

2. Add class or id to your markable content.

3. jQuery select and call marker function.

```
$(".marker-class").marker();
```

Or

```
$("#marker-id").marker({ color: 'peachpuff' });
```

# License

jquery-marker is available under the terms of the MIT License.

