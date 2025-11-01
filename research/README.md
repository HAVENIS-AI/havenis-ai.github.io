# HAVENIS-AI Research & Documentation

This directory contains scientific studies, technical whitepapers, and methodology documentation for HAVENIS-AI's WiFi-based health monitoring technology.

## Available Documents

### 1. Fall Detection Study (TU München)
**File:** [fall-detection-study.pdf](fall-detection-study.pdf)  
**Institution:** Technische Universität München  
**Date:** March 2024  
**Key Finding:** 98.7% accuracy [CI: 97.9% - 99.2%]

**Abstract:** Independent validation study of HAVENIS-AI's WiFi CSI-based fall detection system across 15 care facilities with 1,247 participants over 90 days.

---

### 2. Technical Whitepaper - WiFi CSI Skelett-Tracking
**File:** [wifi-csi-skeleton.pdf](wifi-csi-skeleton.pdf)  
**Version:** 2.1  
**Date:** October 2024  
**Author:** Dr. Danilo Kuss (CTO)

**Abstract:** Comprehensive technical documentation of HAVENIS-AI's patented WiFi Channel State Information technology for extracting 3D skeleton keypoints from standard WiFi signals. Achieves OpenPose-comparable accuracy without cameras.

**Key Topics:**
- CSI signal processing
- 25-keypoint extraction algorithm
- WiPose-25 deep learning architecture
- Privacy-by-design implementation
- Comparison vs. camera systems

---

### 3. Research Methodology
**File:** [methodology.pdf](methodology.pdf)  
**Version:** 1.0  
**Date:** October 2024  
**Authors:** Dr. Danilo Kuss, Dr. Elias Kern

**Abstract:** Detailed research methodology including data collection protocols, model training procedures, evaluation metrics, and validation strategies used in HAVENIS-AI's development process.

**Key Topics:**
- CSI data acquisition
- Ground truth with motion capture
- Dataset composition (500k+ scenes)
- Training pipeline & hyperparameters
- Robustness testing
- Ethics & privacy compliance

---

## Contact

For research collaborations or questions about the studies:

**HAVENIS-AI GmbH**  
Dr. Danilo Kuss (CEO & CTO)  
HAVENIS-AI@web.de  
www.havenis-ai.netlify.app

**Academic Partnership:**  
Prof. Dr. Andreas Schmidt  
Technische Universität München  
andreas.schmidt@tum.de

---

## Citation

If you use our research in your work, please cite:

```bibtex
@techreport{havenis2024wifi,
  title={WiFi CSI-Based 3D Skeleton Tracking for Fall Detection},
  author={Kuss, Danilo and Kern, Elias and Schmidt, Andreas},
  institution={HAVENIS-AI GmbH \& TU München},
  year={2024},
  month={October}
}
```

---

*© 2024 HAVENIS-AI GmbH. All rights reserved.*
