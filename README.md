# prototype2pdf

prototype2pdf is a command line tool that takes a list of URLs for a prototype and outputs a PDF containing screenshots of them. Pages that are too long to fit onto a single page are split across multiple pages.

## Dependencies

- [PhantomJS](http://phantomjs.org/)
- [ImageMagick](http://www.imagemagick.org)

On Mac OS X, this can be installed via [Homebrew](http://brew.sh):

```
brew install phantomjs
```

On debian-type systems, this can be installed via apt:

```
sudo apt-get install phantomjs
```

## Usage

The script takes a list of URLs on stdin and produces a PDF on stdout. For
example:

```
prototype2pdf < urls.txt > my-prototype.pdf
```

where `urls.txt` contains one URL per line.

Optionally, the width of the screenshot to be taken using webkit2png can be
specified as the first argument, $1, as follows, assuming a 150px width:

```
prototype2pdf < urls.txt > my-prototype.pdf 150
```

## Todo

- Use a temporary directory to store the screenshots instead of the current
  directory
- Make the screenshots appear in the PDF in the same order as the input URLs
- Support platforms other than Mac OS
