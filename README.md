# Token raffle distributor

This tool can be used to distribute a set amount of tokens to random addresses passed in recipients.json

## Tool Guidelines

1. Create a secretsManager.js file and add mnemonic for wallet that has some matic (or eth etc) and token for distribution

1. Configure config.js (Most significantly here for "mumbai" / "polygon")

## Scripts

`yarn`

`yarn distribute` - Distributes tokens to list on config network

## Additional Resources

Tip for generating mnemonic:
`yarn add global bip39`
` node -e 'console.log(require("bip39").generateMnemonic())'`

https://github.com/kyledewy/eth-keys <- ethersjs wrapper that can be used to convert mnemonic to pvt key & get public address of mnemonic (I reviewed the code, at time of writing no weird backdoors)
