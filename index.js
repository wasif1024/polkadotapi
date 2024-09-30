const { ApiPromise, WsProvider } = require('@polkadot/api');
async function main () {
    const provider = new WsProvider('wss://chain.dev.siriux.ai');
    const api = await ApiPromise.create({ provider });
    const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
      ]);
      console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
}
main().catch(console.error).finally(() => process.exit());