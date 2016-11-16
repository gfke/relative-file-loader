# Relative file loader for webpack

## Usage
```javascript
    module: {
        loaders: [{
            test: /\.(svg)$/,
            loader: 'relative-file-loader?outputPath=' + relativePathFromOutputFolder
            }
        ]
    }
```
## License

MIT (http://www.opensource.org/licenses/mit-license.php)
