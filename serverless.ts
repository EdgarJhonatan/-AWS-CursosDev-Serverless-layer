import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "base-layer",
  frameworkVersion: "2",
  custom: {},
  provider: {
    name: "aws",
    region: "us-east-2",
    runtime: "nodejs14.x",
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    lambdaHashingVersion: "20201221",
  },
  // import the function via paths
  functions: {},
  layers: {
    baseLayer: {
      name: "baseLayer",
      path: "base",
      retain: true,
      compatibleRuntimes: ["nodejs14.x"],
    },
  },
};

module.exports = serverlessConfiguration;
