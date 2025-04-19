import { buildLogger, logger as winstonLogger } from "../../src/plugins"

describe('Tests in logger.plugin', () => {

  test('buildLogger should return a function logger', () => {

    const logger = buildLogger('test')

    expect( logger.log ).toEqual( expect.any( Function ) )
    expect( logger.error ).toEqual( expect.any( Function ) )

  })

  test('logger.log should call winston', () => {

    const winstonLoggerMock = jest.spyOn( winstonLogger, 'log' )
    const message = 'test message'
    const service = 'test service'

    const logger = buildLogger( service )

    logger.log( message )

    expect( winstonLoggerMock ).toHaveBeenCalled()
    expect( winstonLoggerMock ).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({ 
        "level": "info", 
        message,
        service,
      })
    )

  })

})