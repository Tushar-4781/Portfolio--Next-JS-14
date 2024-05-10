type TProduct = {
  name: string;
  description: string;
  link: string;
  image: any;
  status: string;
  height: number;
  width: number | string;
};

type TOrg = {
  name: string;
  position: string;
  logo: any;
  timestamp: string;
  description: string[];
  jobType: string;
};

type TSkill = {
  label: string;
  icon: any;
};
