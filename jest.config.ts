import { Config } from "jest";
const config: Config = {
preset: 'ts-jest',
testEnvironment: 'jsdom',

transform: {
'^.+\\.tsx?$': 'ts-jest',
},
moduleNameMapper: {
"\\.(gif|ttf|eot|png|svg)$": "<rootDir>",
'^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
},
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
testPathIgnorePatterns: ['/node_modules/', '/dist/']
};

export default config;