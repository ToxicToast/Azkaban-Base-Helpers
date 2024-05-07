import alerts from '@apialerts/js';

interface ApiAlertsSendProps {
  message: string;
  tags?: Array<string>;
  link?: string;
}

export class ApiAlertsHelper {
  private static instance: ApiAlertsHelper;
  private readonly apiKey: string;

  private constructor(apiKey: string) {
    this.apiKey = apiKey;
    alerts.setApiKey(apiKey);
  }

  public static getInstance(apiKey?: string): ApiAlertsHelper {
    if (!ApiAlertsHelper.instance) {
      if (apiKey === null || apiKey === undefined) {
        throw new Error('ApiAlertsHelper: apiKey is required');
      }
      ApiAlertsHelper.instance = new ApiAlertsHelper(apiKey ?? '');
    }
    return ApiAlertsHelper.instance;
  }

  public send(data: ApiAlertsSendProps): void {
    try {
      alerts.send({
        message: data.message,
        tags: data.tags,
        link: data.link,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
