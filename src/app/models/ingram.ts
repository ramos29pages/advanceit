export interface ApiDetailsResponse<T> {
  success: boolean;
  total: number;
  successful: number;
  failed: number;
  data: T;
}

export interface ProductAndDetailsResponse {
  success: boolean;
  total: number;
  successful: number;
  failed: number;
  data: ProductAdvance[];
}

export interface ProductoIngramDetails {
  titulo: string;
  categorias: string[];
  descripcion: string;
  imagenes: string[];
  etiquetas: string;
  especificaciones_tecnicas: Record<string, any>;
  garantia_e_informacion_adicional: Record<string, any>;
}

export interface ProductoIngram {
  id: string;
  SKU: string;
  nombre: string;
  descripcion: string;
  precio: number | null;
  descuentos: boolean;
  estado: string;
  disponibilidad: boolean;
  imagen: string;
  marca: string;
  categoria: string;
  cantidad?: number;
  warehouse?: string;
  warehouseId?: string;
  precioRetail: number | string;
  etiquetas: string[];
}

export interface ProductAdvance {
  _sku: string;
  product: ProductoIngram;
  details: ProductoIngramDetails | null;
}
