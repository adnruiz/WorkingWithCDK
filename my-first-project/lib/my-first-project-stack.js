const { Stack, Duration, RemovalPolicy } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const iam = require('aws-cdk-lib/aws-iam')
const kms = require('aws-cdk-lib/aws-kms')
const s3 = require('aws-cdk-lib/aws-s3')


class MyFirstProjectStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const createS3Bucket = new s3.Bucket(this, 'ImagesForTheRocketCode', {
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_ENFORCED,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: true,
    });

    createS3Bucket.grantRead(new iam.AccountRootPrincipal());
    console.log('Hello World')
  }
}

module.exports = { MyFirstProjectStack }
