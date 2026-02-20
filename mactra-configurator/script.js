/* Mactra configurator Rev.1
* You wanted to have some spaghetti? There's no turning back. FINISH IT. (Send help)
*/
// --- 1. CONFIGURATION ---
// Your specific USB IDs
const VENDOR_ID = 0xF331; 
const PRODUCT_ID = 0x3330;
const USAGE_PAGE = 0xFF33;
const REPORT_ID = 0x3;
const PACKET_SIZE = 16;
const MATRIX_SIZE = 16;

// flags for keymaps
const MACTRA_CONSUMER_FLAG = (0x10 << 24);
const KEY_MOD_LCTRL = (0x01 << 16);
const KEY_MOD_LSHIFT = (0x02 << 16);
const KEY_MOD_LALT = (0x04 << 16);
const KEY_MOD_LMETA = (0x08 << 16);
const KEY_MOD_RCTRL = (0x10 << 16);
const KEY_MOD_RSHIFT = (0x20 << 16);
const KEY_MOD_RALT = (0x40 << 16);
const KEY_MOD_RMETA  = (0x80 << 16);

// masks
const MASK_ALL = 0xFFFFFFFF;
const MASK_FLAGS  = (0xFF << 24);
const MASK_MOD  = (0xFF << 16);
const MASK_CONSUMER  = 0xFFFF;
const MASK_KEY  = 0xFF;

// --- 2. LAYOUT DATA (The "Map") ---
// x, y: Position on screen
// w, h: Size of key (standard key is 50x50 units)
// id: The index in your firmware array (0 to 15, etc.)
let KEY_LAYOUT = [
	{ id: 1, label: "Bri+", name:"Hat Switch Up", x: 100, y: 98, w: 40, h: 40 },	// L
	{ id: 2, label: "Prev", name:"Hat Switch Left", x: 40, y: 152, w: 40, h: 40 }, 	// U
	
	{ id: 3, label: "Play", name:"Hat Switch Center",x: 100, y: 152, w: 40, h: 40 },// CTR
	
	{ id: 4, label: "Next", name:"Hat Switch Right", x: 160, y: 152, w: 40, h: 40 },// D
	{ id: 5, label: "Bri-", name:"Hat Switch Down", x: 100, y: 208, w: 40, h: 40 },	// R

	{ id: 6, label: "Pause", name:"Row 1, Col 1", x: 238, y: 150, w: 50 },
	{ id: 7, label: "Alt+PrSc", name:"Row 1, Col 2", x: 355, y: 150, w: 50 },
	{ id: 8, label: "PrSc", name:"Row 1, Col 3", x: 472, y: 150, w: 50 },

	{ id: 9, label: "Vol+", name:"Rotary Clockwise", x: 50, y: 98, w: 40, h: 40 },
	{ id: 10, label: "Vol-", name:"Rotary Counter Clockwise", x: 150, y: 98, w: 40, h: 40 },
	
	{ id: 11, label: "Rewind", name:"Row 2, Col 2", x: 238, y: 265, w: 50 },
	{ id: 12, label: "F14", name:"Row 2, Col 3", x: 355, y: 265, w: 50 },
	{ id: 13, label: "Forward", name:"Row 2, Col 4", x: 472, y: 265, w: 50 },
	{ id: 14, label: "Mute", name:"Row 2, Col 1", x: 93, y: 265, w: 50 },
];	

// HID Keycodes Map
const HID_CODES = {
	// --- Letters (Usage 0x04 - 0x1D) ---
	0x00: { name: " ", sname: " " },
	0x04: { name: "A", sname: "A" },
	0x05: { name: "B", sname: "B" },
	0x06: { name: "C", sname: "C" },
	0x07: { name: "D", sname: "D" },
	0x08: { name: "E", sname: "E" },
	0x09: { name: "F", sname: "F" },
	0x0A: { name: "G", sname: "G" },
	0x0B: { name: "H", sname: "H" },
	0x0C: { name: "I", sname: "I" },
	0x0D: { name: "J", sname: "J" },
	0x0E: { name: "K", sname: "K" },
	0x0F: { name: "L", sname: "L" },
	0x10: { name: "M", sname: "M" },
	0x11: { name: "N", sname: "N" },
	0x12: { name: "O", sname: "O" },
	0x13: { name: "P", sname: "P" },
	0x14: { name: "Q", sname: "Q" },
	0x15: { name: "R", sname: "R" },
	0x16: { name: "S", sname: "S" },
	0x17: { name: "T", sname: "T" },
	0x18: { name: "U", sname: "U" },
	0x19: { name: "V", sname: "V" },
	0x1A: { name: "W", sname: "W" },
	0x1B: { name: "X", sname: "X" },
	0x1C: { name: "Y", sname: "Y" },
	0x1D: { name: "Z", sname: "Z" },

	// --- Numbers (Usage 0x1E - 0x27) ---
	0x1E: { name: "1", sname: "1" },
	0x1F: { name: "2", sname: "2" },
	0x20: { name: "3", sname: "3" },
	0x21: { name: "4", sname: "4" },
	0x22: { name: "5", sname: "5" },
	0x23: { name: "6", sname: "6" },
	0x24: { name: "7", sname: "7" },
	0x25: { name: "8", sname: "8" },
	0x26: { name: "9", sname: "9" },
	0x27: { name: "0", sname: "0" },

	// --- Standard Function (Usage 0x28 - 0x34) ---
	0x28: { name: "Enter", sname: "Ent" },
	0x29: { name: "Escape", sname: "Esc" },
	0x2A: { name: "Backspace", sname: "BkSp" },
	0x2B: { name: "Tab", sname: "Tab" },
	0x2C: { name: "Space", sname: "Space" },
	0x2D: { name: "Minus / _", sname: "-" },
	0x2E: { name: "Equal / +", sname: "=" },
	0x2F: { name: "[", sname: "[" },
	0x30: { name: "]", sname: "]" },
	0x31: { name: "\\", sname: "\\" },
	0x33: { name: ";", sname: ";" },
	0x34: { name: "Quote", sname: "'" },
	0x35: { name: "Grave Accent", sname: "`" },
	0x36: { name: "Comma", sname: "," },
	0x37: { name: "Period", sname: "." },
	0x38: { name: "Slash", sname: "/" },
	0x39: { name: "Caps Lock", sname: "Caps" },

	// --- F-Keys (Usage 0x3A - 0x45) ---
	0x3A: { name: "F1", sname: "F1" },
	0x3B: { name: "F2", sname: "F2" },
	0x3C: { name: "F3", sname: "F3" },
	0x3D: { name: "F4", sname: "F4" },
	0x3E: { name: "F5", sname: "F5" },
	0x3F: { name: "F6", sname: "F6" },
	0x40: { name: "F7", sname: "F7" },
	0x41: { name: "F8", sname: "F8" },
	0x42: { name: "F9", sname: "F9" },
	0x43: { name: "F10", sname: "F10" },
	0x44: { name: "F11", sname: "F11" },
	0x45: { name: "F12", sname: "F12" },
	0x46: { name: "Print Screen", sname: "PsCr" },
	0x47: { name: "Scroll Lock", sname: "ScrL" },
	0x48: { name: "Pause", sname: "Paus" },
	// --- Navigation (Usage 0x49 - 0x52) ---
	0x49: { name: "Insert", sname: "Ins" },
	0x4A: { name: "Home", sname: "Home" },
	0x4B: { name: "Page Up", sname: "PgUp" },
	0x4C: { name: "Delete", sname: "Del" },
	0x4D: { name: "End", sname: "End" },
	0x4E: { name: "Page Down", sname: "PgDn" },
	0x4F: { name: "Right", sname: "→" },
	0x50: { name: "Left", sname: "←" },
	0x51: { name: "Down", sname: "↓" },
	0x52: { name: "Up", sname: "↑" },

	// --- Keypad (Usage 0x53 - 0x63) ---
	0x53: { name: "Num Lock", sname: "NLCK" },
	0x54: { name: "Num /", sname: "NP/" },
	0x55: { name: "Num *", sname: "NP*" },
	0x56: { name: "Num -", sname: "NP-" },
	0x57: { name: "Num +", sname: "NP+" },
	0x58: { name: "Num Enter", sname: "NPENT" },
	0x59: { name: "Num 1", sname: "NP1" },
	0x5A: { name: "Num 2", sname: "NP2" },
	0x5B: { name: "Num 3", sname: "NP3" },
	0x5C: { name: "Num 4", sname: "NP4" },
	0x5D: { name: "Num 5", sname: "NP5" },
	0x5E: { name: "Num 6", sname: "NP6" },
	0x5F: { name: "Num 7", sname: "NP7" },
	0x60: { name: "Num 8", sname: "NP8" },
	0x61: { name: "Num 9", sname: "NP9" },
	0x62: { name: "Num 0", sname: "NP0" },
	0x63: { name: "Num .", sname: "NP." },
	
	0x68: { name: "F13", sname: "F13", },
	0x69: { name: "F14", sname: "F14", },
	0x6A: { name: "F15", sname: "F15", },
	0x6B: { name: "F16", sname: "F16", },
	0x6C: { name: "F17", sname: "F17", },
	0x6D: { name: "F18", sname: "F18", },
	0x6E: { name: "F19", sname: "F19", },
	0x6F: { name: "F20", sname: "F20", },
	0x70: { name: "F21", sname: "F21", },
	0x71: { name: "F22", sname: "F22", },
	0x72: { name: "F23", sname: "F23", },
	0x73: { name: "F24", sname: "F24", },
	/*
	#define KEY_OPEN 0x74 // Keyboard Execute
	#define KEY_HELP 0x75 // Keyboard Help
	#define KEY_PROPS 0x76 // Keyboard Menu
	#define KEY_FRONT 0x77 // Keyboard Select
	#define KEY_STOP 0x78 // Keyboard Stop
	#define KEY_AGAIN 0x79 // Keyboard Again
	#define KEY_UNDO 0x7a // Keyboard Undo
	#define KEY_CUT 0x7b // Keyboard Cut
	#define KEY_COPY 0x7c // Keyboard Copy
	#define KEY_PASTE 0x7d // Keyboard Paste
	#define KEY_FIND 0x7e // Keyboard Find
	*/
	0x7F: { name: "Mute", sname: "Mute" },
	0x80: { name: "Volume Up", sname: "Vol+" },
	0x81: { name: "Volume Down", sname: "Vol-" },
	0x82: { name: "Caps Lock", sname: "CapL" },
	0x83: { name: "Num Lock", sname: "NumL" },
	0x84: { name: "Scroll Lock", sname: "ScrL" },
	
	// 87-98
	
	// --- Modifiers (Usage 0xE0 - 0xE7) ---
	0xE0: { name: "Left Control", sname: "LCtl" },
	0xE1: { name: "Left Shift", sname: "LSft" },
	0xE2: { name: "Left Alt", sname: "LAlt" },
	0xE3: { name: "Left GUI (Win)", sname: "LWin" },
	0xE4: { name: "Right Control", sname: "RCtl" },
	0xE5: { name: "Right Shift", sname: "RSft" },
	0xE6: { name: "Right Alt", sname: "RAlt" },
	0xE7: { name: "Right GUI (Win)", sname: "RWin" },
	
	0xE8: { name: "Play Pause", sname: "MPLY" },
	0xE9: { name: "Stop CD", sname: "MSTPC" },
	0xEA: { name: "Previous Song", sname: "MPRV" },
	0xEB: { name: "Next Song", sname: "MNXT" },
	0xEC: { name: "Eject CD", sname: "CDEJ" },
	0xED: { name: "Media Volume Up", sname: "MVLU" },
	0xEE: { name: "Media Volume Down", sname: "MVLD" },
	0xEF: { name: "Media Mute", sname: "MMUT" },
	0xF0: { name: "Media WWW", sname: "MWWW" },
	0xF1: { name: "Media Back", sname: "MBAK" },
	0xF2: { name: "Media Forward", sname: "MFWD" },
	0xF3: { name: "Media Stop", sname: "MSTP" },
	0xF4: { name: "Media Find", sname: "MFND" },
	0xF5: { name: "Media Scroll Up", sname: "MSCU" },
	0xF6: { name: "Media Scroll Down", sname: "MSCD" },
	0xF7: { name: "Media Edit", sname: "MEDT" },
	0xF8: { name: "Media Sleep", sname: "MSLP" },
	0xF9: { name: "Media Coffee", sname: "MCOF" },
	0xFA: { name: "Media Refresh", sname: "MREF" },
	0xFB: { name: "Media Calc", sname: "MCAL" },
	
	// --- Media / Special (Check your specific Usage Page handling!) ---
	// Note: If you use a separate "Consumer Page", these IDs will differ. 
	// This assumes Standard HID Page 0x07 context.
	0x65: { name: "Application (Menu)", sname: "MENU" },
	0x66: { name: "Power", sname: "PWR" },
};

// Helper function to get label safely
function getKeyLabel(code, longer) {
	if ( ( (code & (0xFF << 24)) == MACTRA_CONSUMER_FLAG ) || ( (code & (0xFF << 8)) != 0 ) ) { // if its a consumer key
		return longer ? "Consumer: 0x" + toHex(code & 0xFFFF) : "[" + toHex(code & 0xFFFF) + "]";
	}
	if ( (code & (0xFF << 16)) != 0 ) { // if it has mod keys
		return longer ? HID_CODES[code & 0xFF].name : HID_CODES[code & 0xFF].sname;
	}
	
	if (HID_CODES[code]) {
		return longer ? HID_CODES[code].name : HID_CODES[code].sname;
	}
	return "0x" + code.toString(16).toUpperCase(); // Fallback for unknown keys
}

//
// actual keymap from keyboard
let KEYMAP_DATAS = [];

for (let i=0; i<MATRIX_SIZE; i++) {
	if (!KEYMAP_DATAS[i]) KEYMAP_DATAS[i] = [];
	KEYMAP_DATAS[i].keydata = 0;
	KEYMAP_DATAS[i].keydata_original = 0;
	KEYMAP_DATAS[i].keydata_default = 0;
	KEYMAP_DATAS[i].keydata_flags = 0;	
}	

// these are default config
KEYMAP_DATAS[1].keydata_default = MACTRA_CONSUMER_FLAG | 0x6F;
KEYMAP_DATAS[2].keydata_default = 0xEA;
KEYMAP_DATAS[3].keydata_default = 0xE8;
KEYMAP_DATAS[4].keydata_default = 0xEB;
KEYMAP_DATAS[5].keydata_default = MACTRA_CONSUMER_FLAG | 0x70;
KEYMAP_DATAS[6].keydata_default = 0x48;
KEYMAP_DATAS[7].keydata_default = 0x46;
KEYMAP_DATAS[8].keydata_default = 0x46 | KEY_MOD_LALT;
KEYMAP_DATAS[9].keydata_default = 0x81;
KEYMAP_DATAS[10].keydata_default = 0x80;
KEYMAP_DATAS[11].keydata_default = MACTRA_CONSUMER_FLAG | 0xB4;
KEYMAP_DATAS[12].keydata_default = 0x69;
KEYMAP_DATAS[13].keydata_default = MACTRA_CONSUMER_FLAG | 0xB3;
KEYMAP_DATAS[14].keydata_default = 0x7F;

KEYMAP_DATAS[5].keydata = MACTRA_CONSUMER_FLAG | 0x70;

// set default label with KEYMAP_DATAS;
KEY_LAYOUT.forEach(k => {
	// console.log(k.label);
	KEYMAP_DATAS[k.id].keydata =  KEYMAP_DATAS[k.id].keydata_default;
	k.label = getKeyLabel(KEYMAP_DATAS[k.id].keydata);
});


// State
let device = null;
// let currentKeyMap = new Array(KEY_LAYOUT.length).fill().map(() => ({ code: 0x04, flags: 0x00 }));

let editingKeyIndex = -1;
let draftSelection = { code: 0x00, flags: 0x00 }; // Temp storage while modal is open

let packets = [];
let config_packets = [];

// 0x00: { name: "", sname: "" },
let mactra_config = {
	0x0: { name: "LED_TOGGLE", value: 0, default_value: 1 },
	0x1: { name: "LED_MODE", value: 0, default_value: 1 }, 
	0x2: { name: "LED_BRIGHTNESS", value: 64, default_value: 96 },
	0x3: { name: "LED_SPEED", value: 0, default_value: 1 },
	0x4: { name: "LED_REFRESH", value: 80, default_value: 20 },
	0x5: { name: "LED_COLOR_R", value: 0, default_value: 0 }, 
	0x6: { name: "LED_COLOR_G", value: 0, default_value: 255 },
	0x7: { name: "LED_COLOR_B", value: 0, default_value: 32 },
	0x8: { name: "LED_COLOR_R_END", value: 0, default_value: 96 }, 
	0x9: { name: "LED_COLOR_G_END", value: 0, default_value: 255 },
	0xA: { name: "LED_COLOR_B_END", value: 0, default_value: 128 },
};
let has_unsaved_keymap_changes = false;
let has_unsaved_config_changes = false;

let led_picker_active = [0,0,0];
let color_updated = [false, false, false];

const consumerCheck = document.getElementById('flag-consumer');
const consumerHex = document.getElementById('consumer-hex-input');
const pickerGrid = document.getElementById('picker-grid');

// --------------------------------------------------------------------------------------------------------------------

function process_received_packet(packet) {
	let processed_packets = [];
	for (let j=0; j<4; j++) {
		for (let i=0; i<4; i++) {
			// console.log( (packet[(j*4) + i] << (24-(i*8)) ) );
			if (j != 0) {
				processed_packets[j] = processed_packets[j] | (packet[(j*4) + i] << i*8);
			} else {
				processed_packets[j] = processed_packets[j] | (packet[(j*4) + i] << (24-(i*8)) );
			}
		}
	}
	return processed_packets;
}

function process_received_config_packets(packet) {
	for (let i=0; i<packet.length; i++) {
		if(mactra_config[i]) {
			mactra_config[i].value = packet[i][7];
		}
	}
}

function toHex(num) {
	return Math.abs(num).toString(16).toUpperCase().padStart(2, '0');
}

function toHexInt(num) {
	return Math.abs(num).toString(16).toUpperCase().padStart(8, '0');
}

function createIntegerWithBytes(x1, x2, x3, x4) {
	return x1 << 24 | x2 << 16 | x3 << 8 | x4; 
}

function createByteArrayWithNum(num) {
	let bytes = [];
	for (let i=0; i<4; i++) {
		bytes[i] = (num >> (24-(i*8)) & 0xFF );
	}
	return bytes;
}

function createPayload(d1, d2) {
	let payload = [];
	d1 = (d1 & 0xFFFFFF) | 0x03000000; // because I don't trust anyone including myself
	payload.push(d1);
	payload.push(d2);
	payload.push(0);
	payload.push(0);
	return payload; // dispatch
}

function getRGBString(data, start_index) {
	let s = "#";
	//console.log("test:");
	//console.log(data[start_index]);
	for (let i=0; i<3; i++) {
		s += toHex(data[start_index+i].value);
	}
	//console.log(s);
	return s;
}

function getRGBArrayFromText(hex) {
	const sanitizedHex = hex.replace('#', '');
	const num = parseInt(sanitizedHex, 16);
	let array = [
		(num >> 16) & 0xFF,
		(num >> 8) & 0xFF,
		num & 0xFF,
	];
	return array;
}

// console.log();

// --------------------------------------------------------------------------------------------------------------------

// --- 3. UI GENERATION ---
function initUI() {
	const svgGroup = document.getElementById('keys-layer');
	const pickerGrid = document.getElementById('picker-grid');

	// Draw Keyboard SVG
	KEY_LAYOUT.forEach(k => {
		// Group for a single key
		const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
		g.setAttribute("transform", `translate(${k.x}, ${k.y})`);
		g.onclick = () => openModal(k.id, k.name);

		// The Square Shape
		const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		rect.setAttribute("width", k.w || 50);
		rect.setAttribute("height", k.h || 50);
		rect.setAttribute("rx", 5); // Rounded corners
		rect.classList.add("key-shape");
		rect.id = `key-rect-${k.id}`;

		// The Text Label
		const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
		text.setAttribute("x", (k.w || 50) / 2);
		text.setAttribute("y", (k.h || 50) / 2 + 5); // Vertically centered
		text.setAttribute("text-anchor", "middle");
		text.classList.add("key-label");
		text.textContent = k.label;
		text.style.fill = "#C0C0C0";
		text.id = `key-label-${k.id}`;
		g.appendChild(rect);
		g.appendChild(text);
		
		// --- NEW: ADD BOTTOM CIRCLES (Ctrl, Shift, Alt, Win) ---
		// Four circles, 2.5px radius, centered at the bottom
		const r = 2.5;
		const circGap = 8;
		const bottomStartX = (k.w / 2) - (1.5 * circGap); // Centers 4 items perfectly

		// Optional: Color code your modifiers! (Red=Ctrl, Green=Shift, Blue=Alt, Yellow=Win)
		const modColors = ["#ff5555", "#55ff55", "#5555ff", "#ffff55"];

		for (let i = 0; i < 4; i++) {
			const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			circle.setAttribute("cx", bottomStartX + (i * circGap));
			circle.setAttribute("cy", k.h ? k.h - 6 : k.w - 6); // 8px from the bottom edge
			circle.setAttribute("r", r);

			circle.id = `ind-mod-${k.id}-${i}`;
			circle.setAttribute("fill", modColors[i]);

			circle.style.opacity = "0.15"; // Ghost outline
			circle.style.pointerEvents = "none";
			circle.style.transition = "opacity 0.2s";

			g.appendChild(circle);
		}
		
		const barW = 12;
		const barH = 3;
		const barGap = 4;
		const topStartX = (k.w / 2) - barW - (barGap / 2); // Center them

		for (let i = 0; i < 2; i++) {
			const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			bar.setAttribute("x", topStartX + (i * (barW + barGap)));
			bar.setAttribute("y", 4); // 4px from the top edge
			bar.setAttribute("width", barW);
			bar.setAttribute("height", barH);
			bar.setAttribute("rx", 1); // Slightly rounded edges

			// Set IDs so we can find them later: ind-top-{keyID}-{0 or 1}
			bar.id = `ind-top-${k.id}-${i}`;

			// Default colors: 0 (Consumer) = Orange, 1 (Reserved) = Cyan
			bar.setAttribute("fill", i === 0 ? "#ff9800" : "#00bcd4");

			// Make them invisible by default, and ignore mouse clicks
			bar.style.opacity = "0.15"; // 0.15 gives a faint "ghost" outline. Use "0" for totally invisible.
			bar.style.pointerEvents = "none"; 
			bar.style.transition = "opacity 0.2s";

			g.appendChild(bar);
		}

		
		svgGroup.appendChild(g);
	});

	// Draw Picker Grid
	Object.entries(HID_CODES).forEach(([code, data]) => {
		const div = document.createElement("div");
		div.className = "picker-key";
		div.textContent = data.name;
		div.onclick = () => selectDraftKey(parseInt(code));
		pickerGrid.appendChild(div);
	});
}

// --- 1. Populate the Refresh Rate Dropdown (20 to 100, step 5) ---
const refreshSelect = document.getElementById('led-refresh-select');
for (let i = 0; i <= 16; i += 1) {
	const opt = document.createElement('option');
	opt.value = i;
	opt.textContent = 20+(i*5) + ' ms';
	if (i === 0) opt.selected = true; // Default to 60Hz
	refreshSelect.appendChild(opt);
}

// --- 3. Make the Button Orange when things change ---
const ledInputs = ['led-mode-select', 'led-brightness', 'led-refresh-select', 'led-color-1', 'led-color-2'];
ledInputs.forEach(id => {
	// Use 'input' instead of 'change' so color pickers and sliders update instantly
	document.getElementById(id).addEventListener('input', () => {
		document.getElementById('btn-apply-led').classList.add('unsaved-changes');
		has_unsaved_config_changes = true;
	});
});

function updateModalFlagDisplay(keyData) {
	// Set Checkboxes based on loaded flags
	// Assuming Flags: Bit 0=Ctrl, Bit 1=Shift, Bit 2=Alt, Bit 3=Win, 4-7 for right side
	
	editingKeyData = keyData;
	//console.log(editingKeyData);
	flags_byte = editingKeyData & (0xFF << 24);
	//console.log(flags_byte);
	
	document.getElementById('flag-ctrl').checked  		= (editingKeyData & KEY_MOD_LCTRL) !== 0;
	document.getElementById('flag-shift').checked 		= (editingKeyData & KEY_MOD_LSHIFT) !== 0;
	document.getElementById('flag-alt').checked   		= (editingKeyData & KEY_MOD_LALT) !== 0;
	document.getElementById('flag-gui').checked   		= (editingKeyData & KEY_MOD_LMETA) !== 0;
	document.getElementById('flag-ctrl-right').checked  = (editingKeyData & KEY_MOD_RCTRL) !== 0;
	document.getElementById('flag-shift-right').checked = (editingKeyData & KEY_MOD_RSHIFT) !== 0;
	document.getElementById('flag-alt-right').checked   = (editingKeyData & KEY_MOD_RALT) !== 0;
	document.getElementById('flag-gui-right').checked   = (editingKeyData & KEY_MOD_RMETA) !== 0;
	
	// console.log(( (flags_byte == MACTRA_CONSUMER_FLAG) | ((keyData >> 8) & 0xFF != 0) ));
	 
	// toggleModalConsumer( (flags_byte == MACTRA_CONSUMER_FLAG) | ((keyData >> 8) & 0xFF != 0) );
}

function openModal(keyIndex) {
	//console.log(keyIndex);
	//console.log(KEYMAP_DATAS);
	editingKeyIndex = keyIndex;
	editingKeyData = KEYMAP_DATAS[keyIndex].keydata;

	// Load existing data into Draft
	// Copy the object so we don't modify 'currentKeyMap' directly yet
	
	draftSelection = { ...KEYMAP_DATAS[keyIndex] }; 
	
	// Update UI Elements
	document.getElementById('target-key-id').textContent = `#${keyIndex}: ` + getKeyLabel(editingKeyData, true);
	document.getElementById('modal-overlay').style.display = 'flex';

	updatePreview();
	flags_byte = editingKeyData & (0xFF << 24);
	flag_consumer = ((flags_byte == MACTRA_CONSUMER_FLAG) | ((editingKeyData >> 8) & 0xFF != 0));

	document.getElementById('flag-consumer').checked = flag_consumer;
	if(flag_consumer) {
		/*
		consumerHex.disabled = false;
		consumerHex.focus();
		consumerHex.value = (draftSelection.keydata & 0xFFFFFF).toString(16).toUpperCase();				
		*/
		toggleModalConsumer(true);
	} else {
		toggleModalConsumer(false);
		consumerHex.value = null;
	}
	// Highlight the selected keycode in the grid (Visual polish)
	document.querySelectorAll('.picker-key').forEach(el => el.style.border = "1px solid #555");
	const activeEl = document.getElementById(`picker-btn-${draftSelection.keydata}`);
	if(activeEl) activeEl.style.border = "2px solid #007bff";
}

function closeModal() {
	document.getElementById('modal-overlay').style.display = 'none';
	document.querySelectorAll('.key-shape').forEach(el => el.classList.remove('active'));
}

/* --- 2. SELECT KEYCODE (Inside Modal) --- */
// Call this when clicking a grid item: onclick="selectDraftKey(0x04)"
function selectDraftKey(code) {
	draftSelection.keydata = code;
	//console.log(draftSelection.keydata);
	if (document.getElementById('flag-consumer').checked) {
		document.getElementById('flag-consumer').checked = false;
		toggleModalConsumer(false);
	}
	
	updatePreview();

	// Visual Highlight update
	document.querySelectorAll('.picker-key').forEach(el => el.style.border = "1px solid #555");
	const activeEl = document.getElementById(`picker-btn-${code}`);
	if(activeEl) activeEl.style.border = "2px solid #007bff";
}

/* --- 3. TOGGLE FLAG (Inside Modal) --- */
// Attach this to checkbox 'change' events
function updateDraftFlags() {
	let flags = 0;
	if(document.getElementById('flag-ctrl').checked)  		flags |= KEY_MOD_LCTRL;
	if(document.getElementById('flag-shift').checked) 		flags |= KEY_MOD_LSHIFT;
	if(document.getElementById('flag-alt').checked)  		flags |= KEY_MOD_LALT;
	if(document.getElementById('flag-gui').checked)   		flags |= KEY_MOD_LMETA;
	if(document.getElementById('flag-ctrl-right').checked)  flags |= KEY_MOD_RCTRL;
	if(document.getElementById('flag-shift-right').checked) flags |= KEY_MOD_RSHIFT;
	if(document.getElementById('flag-alt-right').checked)   flags |= KEY_MOD_RALT;
	if(document.getElementById('flag-gui-right').checked)   flags |= KEY_MOD_RMETA;

	draftSelection.keydata = (draftSelection.keydata & ~MASK_MOD) | flags;
	console.log(draftSelection.keydata);
	updatePreview();
}

/* --- 4. HELPER: UPDATE TEXT PREVIEW --- */
function updatePreview() {
	const label = getKeyLabel(draftSelection.keydata) || "UNK";
	let prefix = "";
	updateModalFlagDisplay(draftSelection.keydata);
	if (draftSelection.keydata & MASK_MOD) prefix += "[";
	if (draftSelection.keydata & KEY_MOD_LCTRL || draftSelection.keydata & KEY_MOD_RCTRL) prefix += "C";
	if (draftSelection.keydata & KEY_MOD_LSHIFT || draftSelection.keydata & KEY_MOD_RSHIFT) prefix += "S";
	if (draftSelection.keydata & KEY_MOD_LALT || draftSelection.keydata & KEY_MOD_RALT) prefix += "A";
	if (draftSelection.keydata & KEY_MOD_LMETA || draftSelection.keydata & KEY_MOD_RMETA) prefix += "W";
	if (draftSelection.keydata & MASK_MOD) prefix += "]+";
	
	document.getElementById('preview-text').textContent = prefix + label;
}

function updateKeyIndicators(keyId) {
	data = KEYMAP_DATAS[keyId];
	// 1. Check Modifiers (Assuming flags bitmask: Bit 0=Ctrl, 1=Shift, 2=Alt, 3=Win)
	// console.log("Updating indicators for " + keyId + " [" + data.keydata + "]");
	const hasCtrl  = (data.keydata & KEY_MOD_LCTRL || data.keydata & KEY_MOD_RCTRL) !== 0;
	const hasShift = (data.keydata & KEY_MOD_LSHIFT || data.keydata & KEY_MOD_RSHIFT) !== 0;
	const hasAlt   = (data.keydata & KEY_MOD_LALT || data.keydata & KEY_MOD_RALT) !== 0;
	const hasWin   = (data.keydata & KEY_MOD_LMETA || data.keydata & KEY_MOD_RMETA) !== 0;

	// Toggle Bottom Circles
	document.getElementById(`ind-mod-${keyId}-0`).style.opacity = hasCtrl ? "1" : "0.15";
	document.getElementById(`ind-mod-${keyId}-1`).style.opacity = hasShift ? "1" : "0.15";
	document.getElementById(`ind-mod-${keyId}-2`).style.opacity = hasAlt ? "1" : "0.15";
	document.getElementById(`ind-mod-${keyId}-3`).style.opacity = hasWin ? "1" : "0.15";

	// 2. Check Top Bars (Assuming you have boolean flags for these)
	const flags_byte = data.keydata & (0xFF << 24);
	const hasConsumer = ( (flags_byte == MACTRA_CONSUMER_FLAG) | ((data.keydata >> 8) & 0xFF != 0) ); 
	const hasReserved = ( (data.keydata & (0xFF << 24)) == 0x01);

	// Toggle Top Bars
	document.getElementById(`ind-top-${keyId}-0`).style.opacity = hasConsumer ? "1" : "0.15";
	document.getElementById(`ind-top-${keyId}-1`).style.opacity = hasReserved ? "1" : "0.15";
}

function refreshKeymap(pkt) {
	if (!pkt) return;
	KEY_LAYOUT.forEach(k => {
		KEYMAP_DATAS[k.id].keydata = pkt[k.id][1];

		const labelEl = document.getElementById(`key-label-${k.id}`);
		labelEl.textContent = getKeyLabel(KEYMAP_DATAS[k.id].keydata);
		
		updateKeyIndicators(k.id);
	});
}

function refreshConfigs() {
	let led_refresh_value = (mactra_config[4].value >= 20 || mactra_config[4].value <= 100) ? Math.round( (mactra_config[4].value-20)/5) : 0;
	let led_brightness_value = mactra_config[2].value / 8;
	document.getElementById('led-mode-select').selectedIndex = mactra_config[1].value;
	document.getElementById('led-brightness').value = led_brightness_value;
	document.getElementById('led-refresh-select').value = led_refresh_value;

	setBrightnessValue(led_brightness_value);
	
	document.getElementById('led-color-1').value = getRGBString(mactra_config, 5);
	document.getElementById('led-color-2').value = getRGBString(mactra_config, 8);
}

function handler_device_connected(e) {
	hid_request_keymaps();
}

/* --- 5. CONFIRM & SAVE --- */
document.getElementById('btn-confirm-remap').addEventListener('click', () => {
	if (editingKeyIndex === -1) return;

	// Save Draft to Real Memory
	KEYMAP_DATAS[editingKeyIndex] = { ...draftSelection };

	// Update the Main Stage (The SVG Key)
	const labelKey = document.getElementById(`key-label-${editingKeyIndex}`);
	labelKey.textContent = getKeyLabel(draftSelection.keydata) || "UNK";
	// You might want to show a dot or color change if flags are present
	// document.getElementById(`key-label-${editingKeyIndex}`).textContent = label;

	// Mark as unsaved
	document.getElementById(`key-rect-${editingKeyIndex}`).classList.add('unsaved');
	
	// Send key config to device
	hid_send_keymap(editingKeyIndex);
	
	const saveBtn = document.getElementById('btn-write');
	saveBtn.classList.add('unsaved-changes');
	saveBtn.textContent = "Save to Device*"; // Add a little asterisk for flavor
	
	has_unsaved_keymap_changes = true;
	
	updateKeyIndicators(editingKeyIndex);
	console.log("Index " + editingKeyIndex + " changed");
	// console.log(KEYMAP_DATAS[editingKeyIndex].keydata);
	closeModal();
});

// Attach listeners to checkboxes
['flag-ctrl','flag-shift','flag-alt','flag-gui','flag-ctrl-right','flag-shift-right','flag-alt-right','flag-gui-right'].forEach(id => {
	document.getElementById(id).addEventListener('change', updateDraftFlags);
});

navigator.hid.addEventListener("connect", handler_device_connected);
//navigator.hid.addEventListener("disconnect", handler_device_disconnected);

function toggleModalConsumer(toggle) {
	const isConsumer = toggle;
	if (isConsumer) {
		// Dim and disable the Left Grid
		pickerGrid.style.pointerEvents = "none";
		pickerGrid.style.opacity = "0.3";

		// Enable Hex Input
		consumerHex.disabled = false;
		consumerHex.focus();

		// Show current code as hex (e.g., "E9")
		consumerHex.value = (draftSelection.keydata & 0xFFFFFF).toString(16).toUpperCase();
	} else {
		// Restore the Left Grid
		pickerGrid.style.pointerEvents = "auto";
		pickerGrid.style.opacity = "1";

		// Disable Hex Input
		consumerHex.disabled = true;
	}
}

// --- 1. The Toggle Event ---
consumerCheck.addEventListener('change', (e) => {
	toggleModalConsumer(e.target.checked);
	updatePreview();
});

// --- 2. Reading the Hex Input ---
consumerHex.addEventListener('input', (e) => {
	// Strip out "0x" if the user types it, and parse as base-16 (Hex)
	let cleanHex = e.target.value.replace('0x', '').trim();

	// Convert to integer safely
	let val = parseInt(cleanHex, 16);

	if (!isNaN(val)) {
		draftSelection.keydata = val | MACTRA_CONSUMER_FLAG; // Store the raw number in your draft
		updatePreview();
	}
});

// --------------------------------------------------------------------------------------------------------------------
// --- 5. WEBHID CONNECTION ---

async function hid_connect() {
	if (!navigator.hid) {
		alert("WebHID not supported in this browser.");
		return;
	}

	try {
		const filters = [{ usagePage: USAGE_PAGE }];
		const devices = await navigator.hid.requestDevice({ filters });
		
		if (devices.length === 0) return;
		
		device = devices[0];
		await device.open();
	} catch (err) {
		console.error(err);
		alert("Connection Failed: " + err.message);
		return 1;
	}
	return 0;
}

async function hid_request_configs() {
	if (!device) return;
	try {
		for (let i = 0; i < 16; i++) {
			// STEP A: Send "Set Read Index" Command
			// Command: [CMD_SET_INDEX (0x30), Index, 0, 0...]
			const cmdData = new Uint8Array(PACKET_SIZE);
			cmdData[0] = 0x11;  // CMD
			cmdData[1] = 0;     // Reserved
			cmdData[2] = i;     // Index
			
			console.log("Sending request report for config index " + i + "...");
			await device.sendFeatureReport(REPORT_ID, cmdData);

			// STEP B: Read the Data
			// Note: receiveFeatureReport returns a DataView
			const dataView = await device.receiveFeatureReport(REPORT_ID);
			const data = new Uint8Array(dataView.buffer);
			
			config_packets.push(data);
			// console.log(config_packets);
		}
		console.log(config_packets);
		console.log("Config Read Complete.");
		process_received_config_packets(config_packets);
		refreshConfigs();
	} catch (err) {
		alert("Read Failed: " + err.message);
	}
}

async function hid_send_config(index) {
	if (!device) return;
	const cmdData = new Uint8Array(PACKET_SIZE);
	cmdData[0] = 0x21;  // CMD, set config
	cmdData[1] = 0;     // Reserved
	cmdData[2] = index;     // Index
	
	// this is stupid but still i want to make sure it works
	cmdData[6] = mactra_config[index].value;
	
	console.log(cmdData);
	console.log("Sending config set command for config ID " + index + "...");
	try {
		await device.sendFeatureReport(REPORT_ID, cmdData);
	} catch (err) {
		alert("Send Failed: " + err.message);
	}
	
	console.log("Done sending config set command.");
}

async function hid_save_config() {
	if (!device) return;
	// has_unsaved_config_changes
	const cmdData = new Uint8Array(PACKET_SIZE);
	cmdData[0] = 0x31;
	console.log(cmdData);
	console.log("Sending config save command...");
	try {
		await device.sendFeatureReport(REPORT_ID, cmdData);
	} catch (err) {
		alert("Send Failed: " + err.message);
	}
	console.log("Done sending config save command.");
}

async function hid_request_keymaps() {
	if (!device) return;
	try {
		for (let i = 0; i < 16; i++) {
			// STEP A: Send "Set Read Index" Command
			// Command: [CMD_SET_INDEX (0x30), Index, 0, 0...]
			const cmdData = new Uint8Array(PACKET_SIZE);
			cmdData[0] = 0x10;  // CMD
			cmdData[1] = 0;     // Reserved
			cmdData[2] = i;     // Index
			
			console.log("Sending request report for matrix ID " + i + "...");
			await device.sendFeatureReport(REPORT_ID, cmdData);

			// STEP B: Read the Data
			// Note: receiveFeatureReport returns a DataView
			const dataView = await device.receiveFeatureReport(REPORT_ID);
			const data = new Uint8Array(dataView.buffer);
			console.log("Data received.");
			packets[i] = process_received_packet(data);
			
			// console.log(toHex(data[7]) + " " + toHex(data[6]) + " " + toHex(data[5]) + " " + toHex(data[4]) );
		}
		console.log("Keymap Read Complete.");
		refreshKeymap(packets);
	} catch (err) {
		alert("Read Failed: " + err.message);
	}
}

async function hid_send_keymap(index) {
	if (!device) return;
	let keymap_array = createByteArrayWithNum(KEYMAP_DATAS[index].keydata);
	
	const cmdData = new Uint8Array(PACKET_SIZE);
	cmdData[0] = 0x20;  // CMD, set keymap
	cmdData[1] = 0;     // Reserved
	cmdData[2] = index;     // Index
	
	// this is stupid but still i want to make sure it works
	cmdData[3] = keymap_array[3];
	cmdData[4] = keymap_array[2];
	cmdData[5] = keymap_array[1];
	cmdData[6] = keymap_array[0];
	
	console.log(cmdData);
	console.log("Sending keymap set command for matrix ID " + index + "...");
	try {
		await device.sendFeatureReport(REPORT_ID, cmdData);
	} catch (err) {
		alert("Send Failed: " + err.message);
	}
	
	console.log("Done sending keymap set command.");
}

async function hid_save_keymap() {
	// has_unsaved_config_changes
	const cmdData = new Uint8Array(PACKET_SIZE);
	cmdData[0] = 0x30;
	console.log(cmdData);
	console.log("Sending keymap keymap save command...");
	try {
		await device.sendFeatureReport(REPORT_ID, cmdData);
	} catch (err) {
		alert("Send Failed: " + err.message);
	}
	console.log("Done sending keymap save command.");
}

function update_led_brightness() {
	hid_send_config(2);
	clearInterval(led_picker_active[2]);
	led_picker_active[2] = false;
}

function setBrightnessValue() {
	if(!device) return;
	if (!led_picker_active[2]) {
		led_picker_active[2] = setInterval(update_led_brightness, 100);
	}
}

	// --- 2. Update Brightness % Label ---
document.getElementById('led-brightness').addEventListener('input', (e) => {
	const val = e.target.value;
	const percent = Math.round((val / 32) * 100);
	
	// update text
	document.getElementById('bright-val').textContent = percent + '%';
	
	let value = val*8;
	if (value > 255) value = 255;
	mactra_config[2].value = value;
	console.log(mactra_config[2].value);
	
	setBrightnessValue();
});

function update_led_color_1() {
	if (color_updated[0]) {
		const value = document.getElementById('led-color-1').value;
		const value_array = getRGBArrayFromText(value);
		
		mactra_config[5].value = value_array[0];
		mactra_config[6].value = value_array[1];
		mactra_config[7].value = value_array[2];
		
		color_updated[0] = false;
		
		if(!device) return;
		hid_send_config(5);
		hid_send_config(6);
		hid_send_config(7);
	}		
}

function update_led_color_2() {
	if (color_updated[1]) {
		const value = document.getElementById('led-color-2').value;
		const value_array = getRGBArrayFromText(value);
		
		mactra_config[8].value = value_array[0];
		mactra_config[9].value = value_array[1];
		mactra_config[10].value = value_array[2];
		
		color_updated[1] = false;
		
		if(!device) return;
		hid_send_config(8);
		hid_send_config(9);
		hid_send_config(10);
	}
}


document.getElementById('btn-connect').addEventListener('click', async () => {
	// Simulator Mode (Right click or hold shift to skip connection)
	//refreshConfigs(); // debug
	
	await hid_connect();
	if (device) {
		document.getElementById('status-text').textContent = "Connected: " + device.productName;
		document.getElementById('status-text').style.color = "#4caf50";
		document.getElementById('btn-connect').style.display = 'none';
		document.getElementById('btn-read').disabled = false;
		document.getElementById('btn-write').disabled = false;
		await hid_request_keymaps();
		await hid_request_configs();
		
		KEY_LAYOUT.forEach(k => {
			KEYMAP_DATAS[k.id].keydata_original = KEYMAP_DATAS[k.id].keydata;
		});
	}
});

document.getElementById('btn-read').addEventListener('click', async () => {
	await hid_request_keymaps();
	await hid_request_configs();
	// // document.getElementById('led-mode-select');
});

document.getElementById('btn-write').addEventListener('click', async () => {
	if (has_unsaved_keymap_changes) {
		await hid_save_keymap();
		has_unsaved_keymap_changes = false;
	}
	
	if (has_unsaved_config_changes) {
		await hid_save_config();
		has_unsaved_config_changes = false;
	}
	
	const saveBtn = document.getElementById('btn-write');
	saveBtn.classList.remove('unsaved-changes');
	saveBtn.textContent = "Apply";
	
	const saveBtnLED = document.getElementById('btn-apply-led');
	saveBtnLED.classList.remove('unsaved-changes');
	saveBtnLED.textContent = "Apply LEDs";
	
	KEY_LAYOUT.forEach(k => {
		document.getElementById(`key-rect-${k.id}`).classList.remove('unsaved');
	});
});

document.getElementById('btn-apply-led').addEventListener('click', async () => {
	await hid_save_config(); // force apply configs
	
	const saveBtnLED = document.getElementById('btn-apply-led');
	saveBtnLED.classList.remove('unsaved-changes');
	saveBtnLED.textContent = "Apply LEDs";
	
});

document.getElementById('led-mode-select').addEventListener('change', (event) => {
	// 1. Get the newly selected value
	const newValue = event.target.value;
	console.log("LED Mode changed to:", newValue);
	mactra_config[1].value = newValue;
	console.log(mactra_config[1].value);
	hid_send_config(1);
});

document.getElementById('led-refresh-select').addEventListener('change', (event) => {
	// 1. Get the newly selected value
	const newValue = event.target.value;
	console.log("LED Refresh changed to: " + (20 + newValue*5) + "Hz" );
	mactra_config[4].value = 20 + newValue*5;
	hid_send_config(4);
});

// throttle sending packets for stability
document.getElementById('led-color-1').addEventListener('input', (event) => {
	// Stop updating it
	if (!led_picker_active[0]) {
		led_picker_active[0] = setInterval(update_led_color_1, 100);
	}
	
	color_updated[0] = true;
});

document.getElementById('led-color-1').addEventListener('change', (event) => {
	// 1. Get the newly selected value		
	clearInterval(led_picker_active[0]);
	led_picker_active[0] = 0;
});

document.getElementById('led-color-2').addEventListener('input', (event) => {
	// Stop updating it
	if (!led_picker_active[1]) {
		led_picker_active[1] = setInterval(update_led_color_2, 100);
	}
	
	color_updated[1] = true;
});

document.getElementById('led-color-2').addEventListener('change', (event) => {
	// 1. Get the newly selected value		
	clearInterval(led_picker_active[1]);
	led_picker_active[1] = 0;
});


// Initialize
initUI();
KEY_LAYOUT.forEach(k => {
	updateKeyIndicators(k.id);
});

