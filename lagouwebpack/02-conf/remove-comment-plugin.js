class RemoveCommentPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("RemoveCommentPlugin", (compilation) => {
      // console.log("plugins");
      for (const name in compilation.assets) {
        if (name.endsWith(".js")) {
          const content = compilation.assets[name].source();
          const noComments = content.replace(/\/\*{2,}\/\s?/g, "");
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length,
          };
        }
      }
    });
  }
}

module.exports = RemoveCommentPlugin;
