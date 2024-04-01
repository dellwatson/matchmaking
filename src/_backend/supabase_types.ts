export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      crypto: {
        Row: {
          created_at: string;
          currency: number | null;
          decimals: number | null;
          id: number;
          is_native: boolean | null;
          network: number | null;
          style: Json | null;
          token_address: Json | null;
        };
        Insert: {
          created_at?: string;
          currency?: number | null;
          decimals?: number | null;
          id?: number;
          is_native?: boolean | null;
          network?: number | null;
          style?: Json | null;
          token_address?: Json | null;
        };
        Update: {
          created_at?: string;
          currency?: number | null;
          decimals?: number | null;
          id?: number;
          is_native?: boolean | null;
          network?: number | null;
          style?: Json | null;
          token_address?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_crypto_currency_fkey";
            columns: ["currency"];
            isOneToOne: false;
            referencedRelation: "currency";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_crypto_network_fkey";
            columns: ["network"];
            isOneToOne: false;
            referencedRelation: "network";
            referencedColumns: ["id"];
          }
        ];
      };
      currency: {
        Row: {
          created_at: string;
          id: number;
          image_url: string | null;
          name: string | null;
          style: Json | null;
          symbol: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image_url?: string | null;
          name?: string | null;
          style?: Json | null;
          symbol?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          image_url?: string | null;
          name?: string | null;
          style?: Json | null;
          symbol?: string | null;
        };
        Relationships: [];
      };
      fiat: {
        Row: {
          created_at: string;
          currency: number | null;
          decimals: number | null;
          id: number;
          price_in_usd: number | null;
          style: Json | null;
        };
        Insert: {
          created_at?: string;
          currency?: number | null;
          decimals?: number | null;
          id?: number;
          price_in_usd?: number | null;
          style?: Json | null;
        };
        Update: {
          created_at?: string;
          currency?: number | null;
          decimals?: number | null;
          id?: number;
          price_in_usd?: number | null;
          style?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_fiat_currency_fkey";
            columns: ["currency"];
            isOneToOne: false;
            referencedRelation: "currency";
            referencedColumns: ["id"];
          }
        ];
      };
      network: {
        Row: {
          block_explorer: string | null;
          chain_id: number | null;
          created_at: string;
          id: number;
          image_url: string | null;
          is_testnet: boolean | null;
          name: string | null;
          provider: number | null;
          provider_name: string | null;
          style: Json | null;
        };
        Insert: {
          block_explorer?: string | null;
          chain_id?: number | null;
          created_at?: string;
          id?: number;
          image_url?: string | null;
          is_testnet?: boolean | null;
          name?: string | null;
          provider?: number | null;
          provider_name?: string | null;
          style?: Json | null;
        };
        Update: {
          block_explorer?: string | null;
          chain_id?: number | null;
          created_at?: string;
          id?: number;
          image_url?: string | null;
          is_testnet?: boolean | null;
          name?: string | null;
          provider?: number | null;
          provider_name?: string | null;
          style?: Json | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_network_provider_fkey";
            columns: ["provider"];
            isOneToOne: false;
            referencedRelation: "network_provider";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_network_provider_name_fkey";
            columns: ["provider_name"];
            isOneToOne: false;
            referencedRelation: "network_provider";
            referencedColumns: ["name"];
          }
        ];
      };
      network_provider: {
        Row: {
          blockchain: string | null;
          created_at: string;
          description: string | null;
          id: number;
          name: string;
          provider: number | null;
        };
        Insert: {
          blockchain?: string | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          name: string;
          provider?: number | null;
        };
        Update: {
          blockchain?: string | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string;
          provider?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "public_network_provider_provider_fkey";
            columns: ["provider"];
            isOneToOne: false;
            referencedRelation: "network_provider";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
