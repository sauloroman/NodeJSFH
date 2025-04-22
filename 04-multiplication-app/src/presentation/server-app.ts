interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}

export class ServerApp {

  public static run( { base, limit, showTable }: RunOptions ) {
    console.log('Server is running...')
  }

} 