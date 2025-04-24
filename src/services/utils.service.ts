export class UtilsService {

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS');
  }

}
