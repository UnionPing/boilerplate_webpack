module.exports = env => {
    const type = env.prod ? 'prod' : 'dev';
    console.log(`🛠️  running ${type} Mode using ./webpack/webpack.${type}.js 🛠️`);
    return require(`./webpack/webpack.${type}.js`);
};
