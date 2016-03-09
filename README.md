# Summary

This is a simple package to introduce the [free version of linearicons](https://linearicons.com/free) to your meteor project. 
Please not that Linearicons is under the Creative Commons licence. If you use this package you should place links to: 

* the website: [Linearicons.com](https://lineraicons.com)
* the creator: [Perxis](https://perxis.com)

# Usage

The following examples show pretty much all this package has to offer:

````
<body>
  <h1>Samples how to use the hanskohls:linearicons package.</h1>
  <div><span class="lnr lnr-mustache"></span> You don't need to use the LNR template, but it's shorter to write.</div>
  <div>{{>lnr i="mustache"}} Default Size 40px</div>
  <div>{{> sizeSample}}</div>
  <div>{{> lnrCredits}}</div>
</body>

<template name="sizeSample">
  {{>lnr i="mustache" s="s"}} Small - 20px
  {{>lnr i="mustache" s="m"}} Medium - 40px
  {{>lnr i="mustache" s="l"}} Large - 60px
  {{>lnr i="mustache" s="xl"}} XLarge - 80px
  {{>lnr i="mustache" s="xxl"}} XXLarge - 100px
</template>
````

## Link Tag and Span.

The module places the link tag to the free linaricons stylsheet hosted no cloudfront in the `<head>` section of your site. 
You can simply use the standard `<span class="lnr lnr-[iconname]>` approach. 
It will render the icon at a default size of 40 px.

## lnr Template

As a shortform the `lnr` template is provided. It has to parameters: 

* i (icon, mandatory): the name of the icon to be displayed. 
* s (size, optional): the size of the icon to be displaed. valid items are s (20px), m(40px - default when no alternative provided), l (60px), xl (80px) and xxl (100px).s

## lncCredits Template 

`{{lnrCredits}}` creates a link to the lineariconsite and the the Perxis, its creator. 
