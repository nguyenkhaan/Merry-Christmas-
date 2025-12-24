// src/service/SoundService.ts
type SoundController = {
  play: () => void;
  stop: () => void;
};

class SoundService {
  private backgroundSounds: Map<string, SoundController> = new Map();
  private currentBg?: string;

  registerBackground(name: string, controller: SoundController) {
    this.backgroundSounds.set(name, controller);
  }

  playBackground(name: string) {
    this.backgroundSounds.forEach((sound, key) => {
      if (key !== name) sound.stop();
    });

    this.backgroundSounds.get(name)?.play();
    this.currentBg = name;
  }

  stopAllBackground() {
    this.backgroundSounds.forEach(sound => sound.stop());
    this.currentBg = undefined;
  }
  stopBackgroundMusic(name : string) 
  {
    this.backgroundSounds.forEach((sound , key) => {
        if (key == name) sound.stop() // tien hanh dung nhac nen 
    }) 
  } 
}

export default new SoundService();
