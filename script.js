// ==================== //
// DOM Elements
// ==================== //

const form = document.getElementById('sleepForm');
const outputSection = document.getElementById('outputSection');
const outputText = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');

// Conditional field containers
const napDetails = document.getElementById('napDetails');
const exerciseDetails = document.getElementById('exerciseDetails');
const lateSnackDetails = document.getElementById('lateSnackDetails');
const tvVideoDetails = document.getElementById('tvVideoDetails');
const readingDetails = document.getElementById('readingDetails');
const yutaponDetails = document.getElementById('yutaponDetails');
const stretchDetails = document.getElementById('stretchDetails');
const humidifierDetails = document.getElementById('humidifierDetails');

// ==================== //
// Toggle Conditional Fields
// ==================== //

// Nap toggle
document.querySelectorAll('input[name="nap"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            napDetails.classList.remove('hidden');
        } else {
            napDetails.classList.add('hidden');
        }
    });
});

// Exercise toggle
document.querySelectorAll('input[name="exercise"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            exerciseDetails.classList.remove('hidden');
        } else {
            exerciseDetails.classList.add('hidden');
        }
    });
});

// Late snack toggle
document.querySelectorAll('input[name="lateSnack"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            lateSnackDetails.classList.remove('hidden');
        } else {
            lateSnackDetails.classList.add('hidden');
        }
    });
});

// TV/Video toggle
document.querySelectorAll('input[name="tvVideo"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            tvVideoDetails.classList.remove('hidden');
        } else {
            tvVideoDetails.classList.add('hidden');
        }
    });
});

// Reading toggle
document.querySelectorAll('input[name="reading"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            readingDetails.classList.remove('hidden');
        } else {
            readingDetails.classList.add('hidden');
        }
    });
});

// Yutapon toggle
document.querySelectorAll('input[name="yutapon"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === '使用あり') {
            yutaponDetails.classList.remove('hidden');
        } else {
            yutaponDetails.classList.add('hidden');
        }
    });
});

// Stretch toggle
document.querySelectorAll('input[name="stretch"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            stretchDetails.classList.remove('hidden');
        } else {
            stretchDetails.classList.add('hidden');
        }
    });
});

// Humidifier toggle
document.querySelectorAll('input[name="humidifier"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            humidifierDetails.classList.remove('hidden');
        } else {
            humidifierDetails.classList.add('hidden');
        }
    });
});

// Bath type toggle
const bathDetails = document.getElementById('bathDetails');
document.querySelectorAll('input[name="bathType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === '入浴') {
            bathDetails.classList.remove('hidden');
        } else {
            bathDetails.classList.add('hidden');
        }
    });
});

// Report type toggle
const morningReportSections = document.getElementById('morningReportSections');
const nightReportSections = document.getElementById('nightReportSections');
document.querySelectorAll('input[name="reportType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === '朝の報告') {
            morningReportSections.classList.remove('hidden');
            nightReportSections.classList.add('hidden');
        } else {
            morningReportSections.classList.add('hidden');
            nightReportSections.classList.remove('hidden');
        }
    });
});

// Night waking toggle
const nightWakingDetails = document.getElementById('nightWakingDetails');
document.querySelectorAll('input[name="nightWaking"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'あり') {
            nightWakingDetails.classList.remove('hidden');
        } else {
            nightWakingDetails.classList.add('hidden');
        }
    });
});

// ==================== //
// Form Submission
// ==================== //

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Generate summary text based on report type
    let summary;
    if (data.reportType === '朝の報告') {
        summary = generateMorningSummary(data);
    } else {
        summary = generateNightSummary(data);
    }

    // Display output
    outputText.textContent = summary;
    outputSection.classList.remove('hidden');

    // Scroll to output
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ==================== //
// Generate Summary
// ==================== //

function generateMorningSummary(data) {
    let summary = '';

    // Date - format from YYYY-MM-DD to YYYY/M/D
    let dateStr = '';
    if (data.date) {
        const dateParts = data.date.split('-');
        const year = dateParts[0];
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
        dateStr = `${year}/${month}/${day}`;
    }
    summary += `日付：${dateStr}\n`;

    // Sleep images
    summary += `睡眠画像：スリープコイン　${data.sleepCoin || ''}／スマートバンド${data.smartBand || ''}\n`;

    // Wake time
    summary += `起床：時刻 ${data.morningWakeTime || ''}\n`;

    // Night waking
    if (data.nightWaking === 'あり') {
        summary += `途中覚醒：あり（時刻 ${data.nightWakingTime || ''}・回数${data.nightWakingCount || ''}回）\n`;
    } else {
        summary += `途中覚醒：なし\n`;
    }

    // Morning environment
    summary += `起床時環境：室温：${data.morningRoomTemp || ''}℃／湿度：${data.morningHumidity || ''}％／体感：${data.morningComfort || ''}\n`;

    // Morning feeling
    summary += `起床体感：目覚め：${data.wakeFeeling || ''}／頭：${data.morningHeadState || ''}／だるさ：${data.fatigue || ''}／眠気残り：${data.remainingSleepiness || ''}\n`;

    return summary;
}

function generateNightSummary(data) {
    let summary = '';

    // Date - format from YYYY-MM-DD to YYYY/M/D
    let dateStr = '';
    if (data.date) {
        const dateParts = data.date.split('-');
        const year = dateParts[0];
        const month = parseInt(dateParts[1], 10);
        const day = parseInt(dateParts[2], 10);
        dateStr = `${year}/${month}/${day}`;
    }
    summary += `日付：${dateStr}\n`;

    // Wake time and nap
    summary += `今日の起床時刻：${data.wakeTime || ''}`;
    if (data.nap === 'あり') {
        summary += `／昼寝：あり（時刻 ${data.napTime || ''}・${data.napDuration || ''}分）`;
    } else {
        summary += `／昼寝：なし`;
    }
    summary += '\n';

    // Exercise
    if (data.exercise === 'あり') {
        summary += `運動：あり／時刻：${data.exerciseTime || ''}／内容：${data.exerciseContent || ''}／強度：${data.exerciseIntensity || ''}／終了後：${data.afterExercise || ''}\n`;
    } else {
        summary += `運動：なし\n`;
    }

    // Dinner
    summary += `夕食：時刻：${data.dinnerTime || ''}／内容：${data.dinnerContent || ''}\n`;

    // Late snack
    if (data.lateSnack === 'あり') {
        summary += `就寝3時間以内の飲食：あり（${data.lateSnackContent || ''}）\n`;
    } else {
        summary += `就寝3時間以内の飲食：なし\n`;
    }

    // Bath
    if (data.bathType === '入浴') {
        summary += `入浴：時刻：${data.bathTime || ''}／湯温：${data.bathTemp || ''}℃／時間：${data.bathDuration || ''}分／入浴中の行動：${data.bathActivity || ''}\n`;
    } else {
        summary += `入浴：シャワー／時刻：${data.bathTime || ''}\n`;
    }

    // Pre-sleep activities - TV/Video
    if (data.tvVideo === 'あり') {
        summary += `就寝前行動：TV・動画：あり（${data.tvVideoContent || ''}）`;
    } else {
        summary += `就寝前行動：TV・動画：なし`;
    }

    // Reading
    if (data.reading === 'あり') {
        summary += `／読書：あり（内容：${data.readingContent || ''}）\n`;
    } else {
        summary += `／読書：なし\n`;
    }

    // Yutapon
    if (data.yutapon === '使用あり') {
        summary += `ゆたぽん（首用）：使用あり（使用${data.yutaponDuration || ''}分）\n`;
    } else {
        summary += `ゆたぽん（首用）：使用なし\n`;
    }

    // Stretch
    if (data.stretch === 'あり') {
        summary += `ストレッチ：あり（種類 ${data.stretchType || ''}）\n`;
    } else {
        summary += `ストレッチ：なし\n`;
    }

    // Bedroom environment
    summary += `寝室環境：エアコン：暖房（${data.acTemp || ''}℃）`;
    if (data.humidifier === 'あり') {
        summary += `／加湿器：あり（${data.humidity || ''}％）`;
    } else {
        summary += `／加湿器：なし`;
    }
    summary += `／布団：${data.bedding || ''}／体感：${data.comfort || ''}\n`;

    // Current state
    summary += `今の状態：眠気：${data.sleepiness || ''}／頭：${data.headState || ''}／体の緊張：${data.tension || ''}／ストレス：${data.stress || ''}\n`;

    // Bedtime
    summary += `就寝予定時刻：${data.bedTime || ''}\n`;

    // Memo
    if (data.memo) {
        summary += `メモ：${data.memo}\n`;
    } else {
        summary += `メモ：\n`;
    }

    return summary;
}

// ==================== //
// Copy to Clipboard
// ==================== //

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(outputText.textContent);

        // Visual feedback
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="copy-icon">✓</span>コピーしました！';
        copyBtn.style.background = 'hsla(120, 60%, 50%, 0.2)';
        copyBtn.style.borderColor = 'hsl(120, 60%, 50%)';

        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
            copyBtn.style.borderColor = '';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        alert('コピーに失敗しました');
    }
});

// ==================== //
// Smooth Scroll Enhancement
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== //
// Form Auto-save (Optional)
// ==================== //

// Save form data to localStorage on input
const saveFormData = () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem('sleepTrackerData', JSON.stringify(data));
};

// Load form data from localStorage
const loadFormData = () => {
    const savedData = localStorage.getItem('sleepTrackerData');
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(key => {
            const input = form.elements[key];
            if (input) {
                if (input.type === 'radio') {
                    const radio = form.querySelector(`input[name="${key}"][value="${data[key]}"]`);
                    if (radio) radio.checked = true;
                } else {
                    input.value = data[key];
                }
            }
        });

        // Trigger change events to show/hide conditional fields
        document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
            radio.dispatchEvent(new Event('change'));
        });
    }
};

// Auto-save on input change
form.addEventListener('input', saveFormData);

// Set current date automatically
const setCurrentDate = () => {
    const dateInput = document.getElementById('date');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    dateInput.value = `${year}-${month}-${day}`;
};

// Load saved data on page load
window.addEventListener('load', () => {
    setCurrentDate();
    loadFormData();
});
