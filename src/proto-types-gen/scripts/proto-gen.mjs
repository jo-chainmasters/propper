/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */

import "zx/globals";

(async () => {
  try {
    const outDir = path.join(__dirname, "../src");
    $.verbose = false;
    await $`mkdir -p ${outDir}`;
    $.verbose = true;

    const protoTsBinPath = path.join(
      __dirname,
      "../../../node_modules/.bin/protoc-gen-ts_proto"
    );

    const baseDirPath = path.join(__dirname, "..");

    const baseProtoPath = path.join(baseDirPath, "proto");
    const thirdPartyProtoPath = path.join(baseDirPath, "third_party/proto");

    const inputs = [
      "cosmos/gov/v1beta1/gov.proto",
    ];

    // const thirdPartyInputs = [];
    const thirdPartyInputs = ["tendermint/crypto/keys.proto"];

    await $`protoc \
      --plugin=${protoTsBinPath} \
      --ts_proto_opt=forceLong=string \
      --ts_proto_opt=esModuleInterop=true \
      --ts_proto_opt=outputClientImpl=false \
      --proto_path=${baseProtoPath} \
      --proto_path=${thirdPartyProtoPath} \
      --ts_proto_out=${outDir} \
      ${inputs.map((i) => path.join(baseProtoPath, i))} \
      ${thirdPartyInputs.map((i) => path.join(thirdPartyProtoPath, i))}`;

    $.verbose = false;
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
