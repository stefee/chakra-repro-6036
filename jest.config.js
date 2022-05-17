module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.jsx$": [
      "@swc-node/jest",
      {
        target: "es2018",
        react: {
          runtime: "automatic",
          development: true,
        },
      },
    ],
  },
};
