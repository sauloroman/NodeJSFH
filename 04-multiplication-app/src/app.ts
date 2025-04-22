import { yarg } from "./config/plugins/args.plugin"
import { ServerApp } from "./presentation/server-app"

(async () => {
  await main()
  console.log('Fin del programa')
})()

async function main() {

  ServerApp.run({
    base: yarg.b,
    limit: yarg.l,
    showTable: yarg.s
  })

}


