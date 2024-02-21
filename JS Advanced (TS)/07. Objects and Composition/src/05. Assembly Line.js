function createAssemblyLine() {
    return {
        hasClima: function (obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                this.temp < this.adjustTemp ? this.temp++ : this.temp--;
            }
        },
        hasAudio: function (obj) {
            obj.currentTrack = { name: null, artist: null };
            obj.nowPlaying = function () {
                if (this.currentTrack.name != null || this.currentTrack.artist != null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: function (obj) {
            obj.checkDistance = function (distance) {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance >= 0.1 && distance <= 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
}