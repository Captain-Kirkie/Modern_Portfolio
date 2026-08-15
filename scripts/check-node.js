const major = Number(process.versions.node.split('.')[0])

if (major >= 25) {
  console.error(
    `\nNode ${process.version} hangs this Vite 5 dev server (ESM loader infinite loop).\n` +
      `Switch to Node 18 or 22, then retry:\n\n` +
      `  nvm use\n`,
  )
  process.exit(1)
}
