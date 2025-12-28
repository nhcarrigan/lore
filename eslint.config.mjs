import NaomisConfig from "@nhcarrigan/eslint-config";

const srcRules = NaomisConfig.find((rule) => rule.files?.includes("src/**/*.ts"));
const testRules = NaomisConfig.find((rule) => rule.files?.includes("test/**/*.spec.ts"));

export default [
    ...NaomisConfig,
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.app.json"
            }
        },
        plugins: {
            ...srcRules?.plugins,
        },
        rules: {
            ...srcRules?.rules,
            "new-cap": "off",
            // This causes a circular fix error?
            "stylistic/no-multi-spaces": "off",
            // This must be off because this is not a module.
            "import/extensions": [ "error", "never" ],
            // This is a web app
            "no-console": "off",
            // Sometimes a component class will be empty. Not all components require logic.
            "@typescript-eslint/no-extraneous-class": "off",
        }
    },
    {
        files: ["src/**/*.spec.ts"],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.spec.json"
            }
        },
        plugins: {
            ...testRules?.plugins,
        },
        rules: {
            ...testRules?.rules,
            // This must be off because this is not a module.
            "import/extensions": "off",
            // We turn this off because the test bed has weak types.
            "@typescript-eslint/consistent-type-assertions": "off",
            // This one allows us to define test globals.
            "@typescript-eslint/init-declarations": "off",
            "max-lines-per-function": "off"
        }
    }
]