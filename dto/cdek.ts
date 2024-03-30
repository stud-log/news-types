export class ShipmentDetails {
  readonly tariff_code: number; // 136 for standard delivery, 137 for delivery to the door
  /**
   * Код ПВЗ СДЭК, на который будет производиться самостоятельный привоз клиентом
   */
  readonly shipment_point: string;
  /**
   * Код офиса СДЭК (ПВЗ/постамата), на который будет доставлена посылка
   * - Не может использоваться одновременно с to_location
   */
  readonly delivery_point?: string;
  /**
   * Адрес получения
   * - Не может использоваться одновременно с delivery_point
   */
  readonly to_location?: {
    address: string; // Address line
    code?: number; // Code of the locality in CDEK (from the "List of localities" method)
    fias_guid?: string; // Unique FIAS identifier
    postal_code?: string; // Postal code
    longitude?: number; // Longitude
    latitude?: number; // Latitude
    country_code?: string; // ISO 3166-1 alpha-2 country code (default is RU)
    region?: string; // Name of the region
    region_code?: number; // CDEK region code
    sub_region?: string; // Name of the subregion
    city?: string; // Name of the city
  };
  /**
   * Данные отправителя
   */
  readonly sender: {
    company: string;
    name: string;
    email: string;
    phones: {
      number: string;
    }[];
  };
  /**
   * Данные получателя
   */
  readonly recipient: {
    name: string;
    email: string;
    phones: {
      number: string;
    }[];
  };
  /**
   * Список информации по местам (упаковкам)
   */
  readonly packages: {
    number: string; // Invoice id + brand id + product id
    height: number; // in cm
    length: number; // in cm
    weight: number; // in grams
    width: number; // in cm
    items: {
      ware_key: string; // Product id or article number
      payment: {
        value: number; // Always 0 for prepayment
      };
      name: string;
      cost: number; // Cost of the item
      amount: number; // Quantity of the item
      weight: number; // Weight of the item in grams
    }[];
  }[];
}
