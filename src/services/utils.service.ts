export class UtilsService {

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS');
  }

  public generatePoster(poster: string) {
    return `https://s3proxygw.cineplexx.at/cms-live/asset/_default_upload_bucket/${poster.split(' ')[0].toLowerCase()}.jpg`
  }

}
