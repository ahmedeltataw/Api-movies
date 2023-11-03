

module.exports = {
    plugins: [
        require("autoprefixer"),
        require("cssnano"),
        require("postcss-pxtorem"),

        require('rucksack-css'),
        
        require('postcss-combine-duplicated-selectors')({ removeDuplicatedProperties: true, removeDuplicatedValues: true }),
        // 'postcss-purgecss': purgecss(purgecssConfig)
        
    ],
};




