const { PinataSDK } = require("pinata-web3")
require("dotenv").config()

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: process.env.GATEWAY_URL
})

async function main() {
  try {
    const file = await pinata.gateways.get("bafkreiageei3bdlkkltwc4l7zcokmmjal4fhaaau6s5gpga2r5gddctes4")
    console.log(file.data)
  } catch (error) {
    console.log(error);
  }
}

main()
