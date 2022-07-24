---
title: Group Policy Editor on Windows 11 Home
slug: group-policy-editor
date: 2022-07-23
published: true
#cover: ./cover.jpg
disqus: false
generate-card: false
language: en
tags:
    - develop
    - group policy editor
    - windows
---

## Intro

On Win 11 Home Group Policy Editor is not enabled.
Here is howto

```bash
# In an CMD admin prompt do
FOR %F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~*.mum") DO ( DISM /Online /NoRestart /Add-Package:"%F" )
# Then do
FOR %F IN ("%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~*.mum") DO ( DISM /Online /NoRestart /Add-Package:"%F" )
# Then Boot PC
```

After boot you can open `Group Policy Editor` from an admin prompt:
```bash
# In an admin prompt do
gpedit.msc
```

Thanks to:

* [How to add Group Policy Editor to Windows 11/10 Home Edition](https://www.thewindowsclub.com/edit-local-group-policy-objects-using-policy-plus)
* [How to open Group Policy Editor in Windows 11/10](https://www.thewindowsclub.com/how-to-open-group-policy-editor-in-windows-10)

...
