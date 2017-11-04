module.exports = {
    port: process.env.PORT || 2017,
    db: process.env.MONGODB || 'mongodb://localhost:27017/viccon',
    MySql_db: 'Viccon',
    MySql_user: 'root',
    Mysql_pass: 'root',
    MySql_host: 'localhost',
    MySql_port: '8889',
 	  //rutaMultimedia: './images/multimediaViccon/',
 	rutaMultimedia: '/media/',
    nombreCarpetaOriginal: 'original/',
    nombreCarpetaConvertida: 'conversion/',
    nombreCarpetaThumb: 'thumb/',
    extension:'.mp4',
    pathREST:'http://localhost:2017/api/',
    pathAPPjs:'http://localhost:2017',
    nombreBucket:'s3.viccon.bucket1',
    rutaMultimediaCron: 'C:/Users/Taidy/viccon_entrega_4/public/media/',
    QueueUrl: 'https://sqs.us-east-2.amazonaws.com/911317221798/sqs-viccon-video-standard',
    QueueTiempoProcesamiento: '40' //40 segundos
}
