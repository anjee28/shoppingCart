import i3_10100_thumb from './images/i3-10100.jpg';
import r3_3100_thumb from './images/r3-3100.jpg';
import prime_h410m_thumb from './images/AsusPrimeH410.jpg';
import h410_a_pro_thumb from './images/msih410ma.jpg';
import furyBeast_single_thumb from './images/furyBeastDDR5.jpg';
import elitePlus_double_thumb from './images/elitePlus2x.jpg';

//####------Processors-------######
const cpu00 = {
	id: 10001,
	category: 'cpu',
	brand: 'Intel',
	model: 'Core™ i3-10100',
	price: 110.99,
	socket: 'LGA 1200',
	architecture: 'Comet Lake',
	cores: 4,
	threads: 8,
	operatingFreq: 3.7,
	turboFreq: 4.4,
	L3Cache: '6MB',
	thumb: i3_10100_thumb,
	url: `./product-i3_10100`,
};
const cpu01 = {
	id: 10002,
	category: 'cpu',
	brand: 'AMD',
	model: 'Ryzen™ 3 3100',
	price: 133.95,
	socket: 'AM4',
	architecture: 'Zen',
	cores: 4,
	threads: 8,
	operatingFreq: 3.6,
	turboFreq: 3.9,
	L3Cache: '16MB',
	thumb: r3_3100_thumb,
	url: `./product-cpu-r3_3100`,
};

const cpuData = [cpu00, cpu01];
//####-----Motherboards-----######

const mboard00 = {
	id: 20001,
	category: 'mboard',
	brand: 'Asus',
	model: 'Prime H410M-K R2.0',
	price: 49.99,
	socket: 'LGA1200',
	Chipset: 'H470',
	Ethernet: '1x Intel 1Gb Ethernet',
	FormFactor: 'MicroATX',
	dimension: '24.4cm x 24.4cm',
	url: './product-board-AsusPrimeH410',
	thumb: prime_h410m_thumb,
};

const mboard01 = {
	id: 20002,
	category: 'mboard',
	brand: 'MSI',
	model: 'H410M-A Pro',
	price: 45.99,
	socket: 'LGA1200',
	Chipset: 'H10',
	Ethernet: '1x Intel 1Gb Ethernet',
	FormFactor: 'MicroATX',
	dimension: '24.4cm x 24.4cm',
	url: './product-board-MSIH410',
	thumb: h410_a_pro_thumb,
};

const mboardData = [mboard00, mboard01];
//####------RAM------#####

const ram00 = {
	id: 30001,
	category: 'ram',
	brand: 'Kingston',
	model: 'FURY™ Beast DDR5 8GB',
	price: 45.99,
	type: 'DDR5',
	url: './product-ram-FuryBeast-5-8',
	thumb: furyBeast_single_thumb,
};

const ram01 = {
	id: 30002,
	category: 'ram',
	brand: 'Team Group',
	model: 'Elite Plus DDR4 16GBx2',
	price: 45.99,
	type: 'DDR5',
	url: './product-ram-ElitePlus-4-16x2',
	thumb: elitePlus_double_thumb,
};


//const ramData = [ram00, ram01];
const products = [cpu00, cpu01, mboard00, mboard01, ram00, ram01];
//####----Exports----#####
export { products };
