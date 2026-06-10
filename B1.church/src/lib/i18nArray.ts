import { useTranslation } from "react-i18next";

// Returns [] until translations load, so .map never crashes during SSG/hydration
export const useTArray = () => {
  const { t } = useTranslation();
  return <T>(key: string): T[] => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? (result as T[]) : [];
  };
};
