import { FetchError } from 'ofetch';

interface IErrorExtractorType {
  type: BannerType;
  code: string;
  msg: string;
}

export const responseErrorExtrator = (errorObjet: unknown): IErrorExtractorType => {
  if (errorObjet instanceof FetchError) {
    const errorReponse = errorObjet.data as IApiSingleResponse<null>;
    const errCode = errorReponse?.error?.code;
    const errMsg = errorReponse?.error?.message || 'Unknow error!';
    switch (errCode) {
      case '400':
      case '401':
      case '404':
      case '405':
      case '409':
      case '429':
        return { type: 'error', code: errCode, msg: errMsg };
      case '403':
        return { type: 'ban', code: errCode, msg: errMsg };
      default:
        return { type: 'error', code: 'ERROR', msg: 'Uncatched error, Please check!' };
    }
  } else if (errorObjet instanceof Error) {
    return { type: 'error', code: 'ERROR', msg: errorObjet.message };
  } else {
    return { type: 'error', code: 'ERROR', msg: 'Anonymous Error, Please check!' };
  }
};
