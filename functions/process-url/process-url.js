const cloudinary = require("cloudinary").v2;
const qs = require("querystring");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

exports.handler = async function (event, ctx) {
  const { queryStringParameters } = event;
  console.log(queryStringParameters);
  try {
    // const imageUrl = cloudinary.url(`${process.env.CLOUDINARY_BASE_OG_IMAGE}`, {
    const imageUrl = cloudinary.url(
      `https://res.cloudinary.com/awsimages/image/upload/v1630180085/og-base-image_xzjsei.png`,
      {
        sign_url: true,
        // secure: true,
        custom_pre_function: {
          function_type: "remote",
          source: `${process.env.GEN_OPENGRAPH_IMAGE_BASE_URL}?cloud=${
            process.env.CLOUDINARY_CLOUD
          }&${qs.stringify(queryStringParameters)}`,
        },
      }
    );
    console.log(
      `${process.env.GEN_OPENGRAPH_IMAGE_BASE_URL}?${qs.stringify(
        queryStringParameters
      )}`
    );
    return {
      statusCode: 302,
      headers: {
        Location: imageUrl,
      },
      body: "",
    };
  } catch (e) {
    console.log(e);
  }
};
