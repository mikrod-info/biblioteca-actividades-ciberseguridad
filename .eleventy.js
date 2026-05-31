export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/actividades");

    eleventyConfig.addPassthroughCopy({
        "src/assets": "assets",
    });

    eleventyConfig.addCollection("actividades", (collectionApi) => {
        return collectionApi.getFilteredByGlob("src/actividades/**/index.md");
    });

    eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
    eleventyConfig.addLayoutAlias("actividad", "layouts/actividad.njk");

    return {
        pathPrefix: "/biblioteca-actividades-ciberseguridad/",
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
        },

        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
}